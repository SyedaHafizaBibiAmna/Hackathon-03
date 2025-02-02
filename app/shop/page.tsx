import { client } from "@/sanity/lib/client";
import SearchandFilter from "../components/SearchandFilter";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
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

export default async function AllProduct() {
  const data = await getData();

  return (
    <div>
      {/* Pass data to SearchandFilter */}
      <SearchandFilter initialData={data} />
    </div>
  );
}
