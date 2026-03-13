import Image from "next/image";

export const Sidebar = () => {

  return (
    <div
      className="bg-transparent flex flex-col items-center justify-start mt-2"
    >
      
      <Image
        width={59}
        height={30}
        src={"/Title Margen Desktop margin.png"}
        alt="Title Margen Desktop margin"
        className="hover:cursor-pointer"
      />
    </div>
  );
};
