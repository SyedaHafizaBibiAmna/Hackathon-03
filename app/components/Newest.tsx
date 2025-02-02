import Link from "next/link";
import { simplifiedProduct } from "@/sanity/interface";
import { client } from "@/sanity/lib/client";
import { ArrowRight, Badge, ShoppingCart } from "lucide-react";
import Image from "next/image";


async function getData() {
  const query = `*[_type == "product"][1...9] | order(_createdAt desc) {
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
  console.log(data);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

 
  return (
    <div className="container mx-auto px-4 py-20 reveal-on-scroll ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest products
        </h2>

        <Link
          className="text-primary flex items-center gap-x-1"
          href={'/products'}
        >
          See All{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.badge && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                
                </Badge>
              )}
              {/* {product.badge && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )} */}
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
                      ${product.price}
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
    </div>
  );
}
