"use client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export interface FormContact {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}
export const INITIAL_FORM: FormContact = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  message: "",
};
export interface FormContactError {
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
  message?: string;
}
export const ContactSection = () => {
  const [form, setForm] = useState<FormContact>(INITIAL_FORM);
  const [error, setError] = useState<FormContactError>({});
  const [loading, setLoading] = useState(false);
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updateForm = { ...form, [name]: value };
    setForm(updateForm);
  };

  const handleErrors = (data: FormContact): FormContactError => {
    const errors: FormContactError = {};
    if (!data.name.trim()) errors.name = "El nombre es obligatorio";

    if (!data.surname.trim()) errors.surname = "El apellido es obligatorio";

    if (!data.phone.trim()) errors.phone = "El teléfono es obligatorio";

    if (!data.message.trim()) errors.message = "Debes ingresar una consulta";

    if (!data.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email inválido";
    }

    return errors;
  };
  const validateForm = () => {
    const errors = handleErrors(form);

    setError(errors);

    return !Object.values(errors).some(Boolean);
  };
  const getRecaptchaToken = async () => {
    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA no cargado");
    }

    if (!window.grecaptcha.execute) {
      throw new Error("reCAPTCHA no listo");
    }

    return window.grecaptcha.execute(RECAPTCHA_SITE_KEY!, {
      action: "submit",
    });
  };
  const sendMessage = async (token: string) => {
    const response = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form, token }),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje");
    }

    return response.json();
  };

  const handleSubmitMessage = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const token = await getRecaptchaToken();

      const data = await toast.promise(sendMessage(token), {
        pending: "Enviando mensaje...",
        success: "Mensaje enviado correctamente",
        error: "Error al enviar el mensaje",
      });

      setForm(INITIAL_FORM);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className=" relative h-dvh grid grid-cols-1 grid-rows-[60px_1fr_60px]  md:static md:pt-8 md:grid-cols-[1fr_1fr_1fr]"
    >
      <div className="hidden md:block md:row-span-3   md:mask-[linear-gradient(to_bottom,black_70%,transparent)] md:col-start-1 md:justify-self-start md:self-end md:max-w-65 md:w-full">
        <Image
          src={"/contact.jpg"}
          alt="imagen lateral en seccion contacto"
          className="h-auto w-full rounded-se-full "
          height={300}
          width={300}
        ></Image>
      </div>
      <div className="hidden md:block md:row-span-3 md:mask-[linear-gradient(to_top,black_70%,transparent)] md:max-w-65 md:w-full md:col-start-3 md:justify-self-end md:self-start">
        <Image
          src={"/contact2.jpg"}
          alt="imagen lateral en seccion contacto"
          className="h-auto w-full rounded-br-full scale-x-[-1]"
          height={300}
          width={300}
        ></Image>
      </div>
      <form
        method="post"
        action="submit"
        onSubmit={handleSubmitMessage}
        className="row-start-2 flex flex-col z-10 items-center justify-around rounded m-2 Thasadith font-black 
md:bg-transparent
md:bg-linear-to-b 
md:from-red-900/5 
md:via-green-300/30 
md:to-orange-900/5 md:col-start-2 md:w-full md:backdrop-blur-[3px] md:py-6"
      >
        <div className="flex flex-col w-full px md:px-6 ">
          <label htmlFor="name" className="text-[20px] md:text-[18px]">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChangeForm}
            className="bg-yellow-100/80 rounded "
          />
        </div>
        <div className="flex flex-col w-full px md:px-6">
          <label htmlFor="surname" className="text-[20px] md:text-[18px]">
            Apellido *
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={form.surname}
            onChange={handleChangeForm}
            className="bg-yellow-100/80 rounded"
          />
        </div>
        <div className="flex flex-col w-full px md:px-6">
          <label htmlFor="phone" className="text-[20px] md:text-[18px]">
            Telefono *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChangeForm}
            className="bg-yellow-100/80 rounded"
          />
        </div>
        <div className="flex flex-col w-full px md:px-6">
          <label htmlFor="email" className="text-[20px] md:text-[18px]">
            Email *
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChangeForm}
            className="bg-yellow-100/80 rounded"
          />
        </div>
        <div className="flex flex-col w-full px h-50 md:px-6">
          <label htmlFor="details" className="text-[20px]  md:text-[18px]">
            Mensaje *
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChangeForm}
            className="bg-amber-100/80 rounded h-full"
          ></textarea>
        </div>
        <div className="flex flex-col w-full px Alan-Sans md:px-6 md:py-3">
          <button
            disabled={loading}
            type="submit"
            className="bg-amber-100 p-1 hover:cursor-pointer rounded w-full text-[20px]"
          >
            {loading ? "ENVIANDO..." : "ENVIAR"}
          </button>
        </div>
        {error && (
          <p className="text-red-700 text-[14px] font-extrabold">
            los campos marcados con ( * ) son obligatorios
          </p>
        )}
      </form>
    </section>
  );
};
