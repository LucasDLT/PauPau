import { cart} from "@/app/mock";
import Image from "next/image";
export const ProductsCart = () => {
  return (
    <div className=" overflow-y-auto h-200 Alan-Sans md:h-80">
      {cart.map((item, i) => (
        <div key={i} className="border-b">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col m-1 rounded md:items-center">
              <Image
                src={`${item.image}`}
                alt={item.name}
                height={100}
                width={100}
                className="md:h-10 md:w-10"
              />
              <div className="flex justify-around rounded  p-1">
                <button className="bg-olive-500/30 text-center rounded hover:cursor-pointer p-1">
                  <Image
                    src={"/arrow.png"}
                    alt={item.name}
                    height={10}
                    width={10}
                  />
                </button>

                <p className="bg-gray-400/60 rounded w-10 text-center">{item.quantity}</p>
                <button className="bg-olive-500/30 text-center rounded hover:cursor-pointer  p-1">
                  <Image
                    src={"/arrow.png"}
                    alt={item.name}
                    height={10}
                    width={10}
                    className="rotate-180"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-1">
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>$ {item.subtotal}</p>
            </div>
            <button>
              <Image
                src={"/trash.png"}
                alt={item.name}
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
