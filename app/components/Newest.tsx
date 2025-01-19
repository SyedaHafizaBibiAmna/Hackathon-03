// import Link from "next/link";

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { simplifiedProduct } from "@/sanity/interface";

// async function getData() {
//   const query = `*[_type == "product"][0...8] {
//         _id,
//           "imageUrl": image.asset->url,
//           price,
//           title,
//           "slug": slug.current,
//           "categoryName": category->name
//       }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export const dynamic = "force-dynamic";

// export default async function CategoryPage() {
//   const data: simplifiedProduct[] = await getData();

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Our Products for {}
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data.map((product) => (
//             <div key={product._id} className="group relative">
//               <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={product.imageUrl}
//                   alt="Product image"
//                   className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                   width={300}
//                   height={300}
//                 />
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <Link href={`/product/${product.slug}`}>
//                       {product.title}
//                     </Link>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.categoryName}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import { simplifiedProduct } from "@/sanity/interface";
import { client } from "@/sanity/lib/client";
import { ArrowRight, Badge, ShoppingCart } from "lucide-react";


async function getData() {
  const query = `*[_type == "product"][8..15] | order(_createdAt desc) {
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

  // return (
  //   <div className="bg-white">
  //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
  //           Our Newest products
  //         </h2>

  //         <Link className="text-primary flex items-center gap-x-1" href="/productPage">
  //           See All{" "}
  //           <span>
  //             <ArrowRight />
  //           </span>
  //         </Link>
  //       </div>

  //       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  //         {data.map((product) => (
  //           <div key={product._id} className="group relative">
  //             <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
  //               <img
  //                 src={product.imageUrl}
  //                 alt="Product image"
  //                 className="w-full h-full object-cover object-center lg:h-full lg:w-full"
  //                 width={300}
  //                 height={300}
  //               />
  //             </div>

  //             <div className="mt-4 flex justify-between">
  //               <div>
  //                 <h3 className="text-sm text-gray-700">
  //                   <Link href={`/product/${product.slug}`}>
  //                     {product.title}
  //                   </Link>
  //                 </h3>
  //                 <p className="mt-1 text-sm text-gray-500">
  //                   {product.categoryName}
  //                 </p>
  //               </div>
  //               <p className="text-sm font-medium text-gray-900">
  //                 ${product.price}
  //               </p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest products
        </h2>

        <Link
          className="text-primary flex items-center gap-x-1"
          href="/productPage"
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
                  New
                </Badge>
              )}
              {product.badge && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={"components/productDectription/discription"}>
                <img
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
