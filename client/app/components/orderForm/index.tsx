'use client'
import { FormOrder, FormOrderError, INITIAL_FORM } from "@/app/types/types";
import { TextareaHTMLAttributes, useState } from "react";

export const OrderForm = () => {

const [error, setError]= useState<string>("")
const [form, setForm]= useState<FormOrder>(INITIAL_FORM)



const handleChangeForm = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
  const {name, value, type} = e.target;
  const newValue =
    type === "checkbox"
    ?(e.target as HTMLInputElement).checked
    :value
  
    setForm({...form, 
      [name]: newValue})
      console.log(form)

}


  return (
    <form
      action="submit"
      className="font-black grid grid-cols-1 grid-rows-[1fr_80px_60px] gap-8 pb-10 md:grid-rows-2 md:grid-cols-[1fr_600px]"
    >
      <div className="flex flex-col gap-5 md:col-start-1 md:grid md:gap-8 ">
        <div className="border-b flex gap-2">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={form.name} className="custom-input font-light" onChange={handleChangeForm} />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" value={form.surname} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="dni">DNI</label>
          <input type="text" id="dni" name="dni" value={form.dni} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="country">Pais/Region</label>
          <input type="text" id="country" name="country" value={form.country} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="city">Localidad/Ciudad</label>
          <input type="text" id="city" name="city" value={form.city} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="address">Direccion</label>
          <input type="text" id="address" name="address" value={form.address} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="phone">Telefono</label>
          <input type="text" id="phone" name="phone" value={form.phone} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={form.email} className="custom-input font-light" onChange={handleChangeForm}/>
        </div>
        <div className="flex flex-col h-40">
          <label htmlFor="aditionalInfo">Informacion Adicional</label>
          <textarea
            name="aditionalInfo"
            id="aditionalInfo"
            className="border rounded h-30 backdrop-blur-xs text-[12px] custom-input font-light "
            value={form.aditionalInfo}
            onChange={handleChangeForm}
          ></textarea>
        </div>
      </div>

      <div className="grid gap-1 text-[14px] items-center justify-center md:col-start-2 md:row-start-1 md:self-end ">
        <div className="border rounded-full flex justify-between items-center h-8 px-2">
          <label htmlFor="free">punto de encuentro sin costo</label>
          <input type="radio" id="free" name="send" value="free" checked={form.send === "free"} onChange={handleChangeForm}  />
        </div>

        <div className="border rounded-full flex justify-between items-center h-8 px-2">
          <label htmlFor="cost">envio con costo a coordinar</label>
          <input type="radio" id="cost" name="send" value="cost" checked={form.send === "cost"} onChange={handleChangeForm} />
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
