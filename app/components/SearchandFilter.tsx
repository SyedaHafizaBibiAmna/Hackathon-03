"use client";
import { useState } from "react";
import { simplifiedProduct } from "@/sanity/interface";
import { Badge, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Pagination from "./Pagination"; // Import the Pagination component
import Image from "next/image";

export default function ProductList({
  initialData,
}: {
  initialData: simplifiedProduct[];
}) {
  const [data, setData] = useState<simplifiedProduct[]>(initialData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8); // Items per page

  const categories = Array.from(
    new Set(initialData.map((product) => product.title).filter(Boolean))
  ).sort();
  const tags = Array.from(
    new Set(initialData.flatMap((product) => product.tags || []))
  ).sort();

  // Filter data based on search, category, and tags
  const handleFilter = () => {
    let filteredData = initialData;

    if (searchTerm) {
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (product) => product.title === selectedCategory
      );
    }

    if (selectedTag !== "All") {
      filteredData = filteredData.filter((product) =>
        product.tags?.includes(selectedTag)
      );
    }

    setData(filteredData);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-20 reveal-on-scroll">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight">
        Featured Products
      </h1>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <button
          onClick={handleFilter}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-300"
        >
          Apply Filters
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {currentItems.map((product) => (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.badge && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  {product.badge}
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
              <button className="rounded-full bg-purple-600 p-2 text-white transition-colors hover:bg-[#00A294]">
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
