"use client";
import {
  FormOrder,
  FormOrderError,
  INITIAL_FORM,
  Order,
} from "@/app/types/types";
import { useState } from "react";
import { useAppContext } from "@/app/context/context";
import { getTotalCart } from "@/app/helpers";

export const OrderForm = () => {
  const [error, setError] = useState<FormOrderError>({});
  const [form, setForm] = useState<FormOrder>(INITIAL_FORM);

  const { cart, app } = useAppContext();

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    const updateForm = { ...form, [name]: newValue };

    setForm(updateForm);

    //const fieldError = handleErrors(updateForm);

   // setError(fieldError);
  };
  const handleErrors = (data: FormOrder): FormOrderError => {
    const errors: FormOrderError = {};
    if (!data.name.trim()) errors.name = "El nombre es obligatorio";

    if (!data.surname.trim()) errors.surname = "El apellido es obligatorio";

    if (!data.dni.trim()) errors.dni = "El DNI es obligatorio";

    if (!data.country.trim()) errors.country = "El país es obligatorio";

    if (!data.city.trim()) errors.city = "La ciudad es obligatoria";

    if (!data.address.trim()) errors.address = "La dirección es obligatoria";

    if (!data.phone.trim()) errors.phone = "El teléfono es obligatorio";

    if (!data.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email inválido";
    }

    if (!data.send) errors.send = "Seleccioná un tipo de envío";
    return errors;
  };

  const handleSubmitOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validateErrors = handleErrors(form);
      setError(validateErrors);
      const hasError = Object.values(validateErrors).some(Boolean);
      if (hasError) return;

      const cartTotal = getTotalCart(cart, app.product);
      if (cartTotal === 0) {
        throw new Error("El carrito esta vacio, agrega productos y volve a intentarlo")
      }
      const orderPayload: Order = {
        cart: {
          timestamp: Date.now(),
          listItems: cart.listItems,
        },
        total: cartTotal,
        infoUser: {
          name: form.name,
          surname: form.surname,
          dni: form.dni,
          country: form.country,
          city: form.city,
          address: form.address,
          phone: form.phone,
          email: form.email,
          aditionalInfo: form.aditionalInfo,
          send: form.send,
        },
      };
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA no cargado");
      }
      if (!window.grecaptcha?.execute) {
        throw new Error("reCAPTCHA no listo");
      }
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY!, {
        action: "submit",
      });
      console.log("token en el envio", token);
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...orderPayload, token }),
      });
      if (!response.ok) {
        throw new Error("Error en el envío de la orden");
      }
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action="submit"
      onSubmit={handleSubmitOrder}
      className="font-black grid grid-cols-1 grid-rows-[1fr_80px_60px] gap-8 pb-10 md:grid-rows-2 md:grid-cols-[1fr_600px]"
    >
      <div className="flex flex-col gap-5 md:col-start-1 md:grid md:gap-8 ">
        <div className="border-b flex gap-2">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            className="custom-input font-light"
            onChange={handleChangeForm}
            />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="surname">Apellido *</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={form.surname}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="dni">DNI *</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={form.dni}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="country">Pais/Region *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="city">Localidad/Ciudad *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="address">Direccion *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="phone">Telefono *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
        </div>
        <div className="border-b flex gap-2">
          <label htmlFor="email">Email *</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            className="custom-input font-light"
            onChange={handleChangeForm}
          />
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
          <input
            type="radio"
            id="free"
            name="send"
            value="free"
            checked={form.send === "free"}
            onChange={handleChangeForm}
          />
        </div>

        <div className="border rounded-full flex justify-between items-center h-8 px-2">
          <label htmlFor="cost">envio con costo a coordinar</label>
          <input
            type="radio"
            id="cost"
            name="send"
            value="cost"
            checked={form.send === "cost"}
            onChange={handleChangeForm}
          />
        </div>
      </div>
      <div className="Alan-Sans justify-self-center self-center  md:col-start-2 md:row-start-2  md:justify-self-center ">
        <button
          type="submit"
          className="bg-olive-500/30 p-1 border rounded  md:h-8 md:hover:cursor-pointer "
        >
          ENVIAR PEDIDO
        </button>
      </div>
    </form>
  );
};
