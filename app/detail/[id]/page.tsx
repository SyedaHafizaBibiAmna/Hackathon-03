import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import Reviews from "@/app/components/Reviews";
import SocialShare from "@/app/components/SocialShare";
import { Button } from "@/components/ui/button";
import { fullProduct } from "@/sanity/interface";
import { client } from "@/sanity/lib/client";
import { Star, Truck } from "lucide-react";
import Image from "next/image";

async function getData(id: string) {
  const query = `*[_type == "product" && _id == "${id}"]{
  _id,
  title,
  price,
  "priceWithoutDiscount": priceWithoutDiscount,
  badge,
  "imageUrl": image.asset->url,
  "categoryName": category->title,
  description,
  inventory,
  tags,
  price_id
}`;

  const data = await client.fetch(query, { id });
  return data[0];
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Wrap the params in a Promise to match the expected type
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;

  console.log("Dynamic Route Params:", id);

  if (!id) {
    return <div>Error: Product ID is missing in the URL!</div>;
  }

  const data: fullProduct | null = await getData(id);

  if (!data) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src={data.imageUrl}
            alt={data.title}
            height={400}
            width={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.title}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.tags}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                imgeUrl={data.imageUrl}
                name={data.title}
                price={data.price}
                key={`${data._id}-`}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                imgeUrl={data.imageUrl}
                name={data.title}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>

            {/* Social Share below the paragraph */}
            <div className="mt-4">
              <SocialShare
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={data.title}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-12">
        {/* <Reviews productId={data._id} /> */}
<Reviews productId={data._id}/>
      </div>
    </div>
  );
}
