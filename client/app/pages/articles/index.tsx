import { products } from "@/app/mock";
import Image from "next/image";
export const Articles=()=> {
    const productsFiltered = products.filter((product) => product.type === "product");
    return (
        <div id="articles" className="h-screen  min-h-0 grid grid-cols-1 grid-rows-[1fr] border-slate-400 md:pt-8">

            <ul className="flex flex-col gap-8 overflow-y-auto items-center min-h-0 ">
                {[...productsFiltered, ...productsFiltered].map((product, i)=>
                <li key={i} className="relative h-150 w-full Thasadith font-extrabold gap-0.5 text-[20px] flex flex-col">
                    <Image 
                    height={400}
                    width={400}
                    src={`${product.image}`}
                    alt={`${product.name}`}
                    className="fill object-contain bg-blue-400/20 rounded-s-full p-1 md:hover:scale-110 md:transform md:duration-500 md:ease-in-out  border"
                    />
                    <div className="bg-amber-500/25 backdrop-blur-sm rounded-se-full p-2 text-olive-900">
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>$ {product.price}</p>
                    <button className="Julius-Sans-One p-0.5 text-[16px] bg-white/50 rounded-sm md:hover:cursor-pointer">agregar al carrito</button>
                    </div>
                </li>
                )}
            </ul>
        </div>
    );
}