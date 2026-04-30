export default function Footer() {
  return (
    <footer className=" bg-stone text-xs text-center py-1 mt">
      <p>
        &copy; {new Date().getFullYear()} Pau Pau Arte en Arcilla – Todos
        los derechos reservados.
      </p>
      <p className="text-xs text-gray-900 mt text-center">Desarrollado por Lucas Sebastián de la Torre</p>
      <p>
        <p className="text-xs text-gray-900 mt text-center">
          Este sitio está protegido por reCAPTCHA y se aplican la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Términos de Servicio
          </a>{" "}
          de Google.
        </p>
      </p>
    </footer>
  );
}