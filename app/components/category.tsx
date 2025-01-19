import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { simplifiedProduct } from "@/sanity/interface";

async function getData() {
  const query = `*[_type == "categories"][0...3] {
        _id,
        "imageUrl": image.asset->url,
        price,
        title,
        "categoryName": category->name
    }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage() {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl tracking-tight mb-8">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  // priority
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {product.categoryName}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    {product.title}
                  </p>
                  {/* <p className="font-inter text-sm text-gray-200">
                    ${product.categoryName}
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
