
export interface AppStore{
    cart:Cart,
    product:Product[]
}
export interface Product{
id:string,
name:string, 
material:string,
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
total:number
}
export interface CartItem{
    productId:string,
    quantity:number
}

export const INITIAL_STATE:AppStore={
    cart:{timestamp:0,listItems:{},total:0},
    product:[]
}