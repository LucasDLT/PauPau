export const OrderForm = () => {
  return (
    <form
      action="submit"
      className="font-black grid grid-cols-1 grid-rows-[1fr_80px_60px] gap-8 pb-10 md:grid-rows-2 md:grid-cols-[1fr_600px]"
    >
      <div className="flex flex-col gap-5 md:col-start-1 md:grid md:gap-8 ">
        <div className="border-b flex gap-2">
          <label htmlFor="">Nombre</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Apellido</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">DNI</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Pais/Region</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Localidad/Ciudad</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Direccion</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Telefono</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="">Email</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div className="flex flex-col h-40">
          <label htmlFor="">Informacion Adicional</label>
          <textarea
            name=""
            id=""
            className="border rounded h-30 backdrop-blur-xs text-[12px] custom-input font-light "
          ></textarea>
        </div>
      </div>

      <div className="grid gap-1 text-[14px] items-center justify-center md:col-start-2 md:row-start-1 md:self-end ">
        <div className="checkbox-item border rounded-full flex justify-between items-center h-8 px-2">
          <label htmlFor="encuentro">punto de encuentro sin costo</label>
          <input type="checkbox" id="encuentro" className="custom-checkbox" />
        </div>

        <div className="checkbox-item border rounded-full flex justify-between items-center h-8 px-2">
          <label htmlFor="envio">envio con costo a coordinar</label>
          <input type="checkbox" id="envio" className="custom-checkbox" />
        </div>
      </div>
      <div className="Alan-Sans justify-self-center self-center  md:col-start-2 md:row-start-2  md:justify-self-center ">
        <button className="bg-olive-500/30 p-1 border rounded  md:h-8 md:hover:cursor-pointer ">
          ENVIAR PEDIDO
        </button>
      </div>
    </form>
  );
};
