
export interface AppStore{
    cart:Cart,
    product:Product[]
}
export interface Product{
id:number,
name:string, 
material:string,
description:string,
color:string,
price:number,
size:string,
weight:string,
finished:string,
stock:number,
type:TypeProduct,
image:string[]
}

type TypeProduct= "project" | "product"

export interface Cart{
timestamp:number,
listItems:Record<string, CartItem>,
}
export interface CartItem{
    productId:string,
    quantity:number
}

export const INITIAL_STATE:AppStore={
    cart:{timestamp:0,listItems:{}},
    product:[]
}

export  type CartViewItem = Product &{
    quantity:number,
    subtotal:number
}