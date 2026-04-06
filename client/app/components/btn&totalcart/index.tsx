'use client';
import { useRouter } from "next/navigation";

interface PropsBtnsComponent {
  total: number;
}

export const BtnTotalCart: React.FC<PropsBtnsComponent> = ({ total }) => {
  const router = useRouter();
  const handlegoToArticles = () => {
    router.push(`/#articles`);
  };
  return (
    <div className="flex flex-col justify-around items center Alan-Sans text-sm text-center gap-2 md:flex-row md:justify-between md:items-center">
      <button
        className="border p-1 rounded hover:cursor-pointer"
        onClick={
          handlegoToArticles
        }
      >
        AGREGAR MAS PRODUCTOS
      </button>
      <button
        className="border p-1 rounded hover:cursor-pointer"
        onClick={() => {
          console.log("eliminado");
        }}
      >
        ELIMINAR LOS PRODUCTOS
      </button>
      <p className="border p-1 rounded ">TOTAL: ${total}</p>
    </div>
  );
};
