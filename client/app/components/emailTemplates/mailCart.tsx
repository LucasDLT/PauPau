import { FormContact } from "@/app/views/contact";

interface AdminMailProps extends FormContact{}

export const mailToAdmin = ({name, surname, phone, email, message}:AdminMailProps) => {
    return `
    <h1>Consulta Online</h1>
    <p>Nombre: ${name}</p>
    <p>Apellido: ${surname}</p>
    <p>Tel.: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Mensaje: ${message}</p>
    `       
}