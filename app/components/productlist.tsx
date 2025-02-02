"use client";
import { simplifiedProduct } from "@/sanity/interface";
import {client} from '../../sanity/lib/client';

import { Badge, ShoppingCart } from "lucide-react";

import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination"; // Assuming you have a Pagination component
import Image from "next/image";

// Fetch data with pagination support
async function getData(page: number, limit: number) {
  const skip = (page - 1) * limit; // Calculate the skip based on the current page
  const query = `*[_type == "product"] [${skip}...${skip + limit}] | order(_createdAt desc) {
    _id,
    title,
    price,
    "categoryName": category->name,
    "imageUrl": image.asset->url,
    description,
    badge,
    priceWithoutDiscount,
    "tags": tags[]
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fetch total product count for pagination
async function getTotalProducts() {
  const query = `count(*[_type == "product"])`;
  const count = await client.fetch(query);
  return count;
}

export default function ProductList() {
  const [data, setData] = useState<simplifiedProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12; // Set the number of products per page

  // Fetch products and total pages
  useEffect(() => {
    const fetchData = async () => {
      const totalCount = await getTotalProducts();
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
      const products = await getData(currentPage, itemsPerPage);
      setData(products);
    };
    fetchData();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-20 reveal-on-scroll">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
        All Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.badge && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.tags && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={`/detail/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.priceWithoutDiscount && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.priceWithoutDiscount}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
