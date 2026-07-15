
export interface AppStore{
    cart:Cart,
    product:Products
}
export type  Products = Record<string,Product>

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
export const INITIAL_CART:Cart={
 timestamp:0,
 listItems:{}
}
export interface CartItem{
    productId:string,
    quantity:number
}

export const INITIAL_STATE:AppStore={
    cart:{timestamp:0,listItems:{}},
    product:{}
}

export  type CartViewItem = Product &{
    quantity:number,
    subtotal:number
}

//NOTA SOBRE CANTIDAD Y STOCK: hay que hacer un calculo para que cuanto mas proximo se este del final del stock el numero de la cantidad agregada al carrito se vuelva rojo<


//Tipados para el formulario de orden 
export type Send="free"|"cost"
export interface FormOrder {
name:string,
surname:string,
dni:string,
country:string, 
city:string,
address:string,
phone:string,
email:string,
aditionalInfo:string,
send:Send,
}

export const INITIAL_FORM:FormOrder={
name:"",
surname:"",
dni:"",
country:"", 
city:"",
address:"",
phone:"",
email:"",
aditionalInfo:"",
send:"free",    
}

export interface Order{
    cart:Cart,
    total:number,
    infoUser:FormOrder
}

export interface FormOrderError{
  name?: string;
  surname?: string;
  dni?: string;
  country?: string;
  city?: string;
  address?: string;
  phone?: string;
  email?: string;
  aditionalInfo?: string;
  send?: string;}


  export interface OrderItem {
  name: string;
  image: string;
  quantity: number;
  price: number;
  subtotal: number;
}