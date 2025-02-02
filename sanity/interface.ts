export interface simplifiedProduct{
    _id: string;
    imageUrl: string;
    price: number;
    slug: string
    categoryName: string;
    title: string;
    badge:string;
    priceWithoutDiscount:number
    tags:string
}
export interface fullProduct{
    price_id: string;
    _id: number;
    imageUrl: string;
    price: number;
    slug: string
    categoryName: string;
    title: string;
    description: string;
    priceWithoutDiscount:number
    tags:string
}