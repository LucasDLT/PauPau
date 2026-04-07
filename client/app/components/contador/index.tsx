"use client";
import Image from "next/image";
interface Item {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
}
export const Counter: React.FC<Item> = ({ count, setCount, stock }) => {

  const handleIncrementCount = () => {
    if (count >= stock) return;
    setCount(count + 1);
  };
  const handleDecrementCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className="flex justify-around rounded h-10 w-30 gap-1 p-1">
      <button
        className="bg-olive-600/90 text-center flex justify-center items-center rounded hover:cursor-pointer px-3 md:bg-transparent md:border border-black/50 md:p-3"
        onClick={() => handleDecrementCount()}
      >
        <Image
          src={"/arrow.png"}
          alt={"icono de flecha de decremento"}
          height={10}
          width={10}
        />
      </button>

      <p className="border rounded w-10 flex justify-center items-center md:bg-transparent md:border border-black/50 md:p-3">{count}</p>
      <button
        className="bg-olive-600/90 text-center rounded hover:cursor-pointer p-3 md:bg-transparent md:border border-black/50 md:p-3"
        onClick={() => handleIncrementCount()}
      >
        <Image
          src={"/arrow.png"}
          alt={"icono de flecha de incremento"}
          height={10}
          width={10}
          className="rotate-180"
        />
      </button>
    </div>
  );
};
