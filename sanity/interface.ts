export interface simplifiedProduct{
    _id: string;
    imageUrl: string;
    price: number;
    slug: string
    categoryName: string;
    title: string;
    badge:string;
    priceWithoutDiscount:number
}
export interface fullProduct{
    price_id: string;
    _id: string;
    imageurl: string;
    price: number;
    slug: string
    categoryName: string;
    title: string;
    description: string;
}