import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 Thasadith backdrop-blur-sm border">
      <h3 className="animate-pulse text-orange-700 text-shadow-sm">BUSCANDO ARTICULOS</h3>
      <ColorRing
        colors={["#e2313d", "#b85e47", "#65482c", "#9dc249", "#2c9e3b"]}
      />
    </div>
  );
};
