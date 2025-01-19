"use client";

import { Button } from "@/components/ui/button";


import { useShoppingCart } from "use-shopping-cart";

// async function getData() {
//   const query = `*[_type == "product"][8..15] | order(_createdAt desc) {
//   _id,
//   title,
//   price,
//   "categoryName": category->name,
//   "imageUrl": image.asset->url,
//   description,
//   badge,
//   priceWithoutDiscount,
//   "tags": tags[]

// }`; const data = await client.fetch(query);
//   console.log(data);

//   return data;
// }

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  imgeUrl: string;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  imgeUrl,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: imgeUrl,
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}