import { FaCheck } from "react-icons/fa6";

export default function Help() {
  return (
    <div>
      <div className="banner-simple">
        <div className="text-center">
          <h1 className="title-banner-simple">Soporte técnico</h1>
        </div>
      </div>
      <div className="container-body-delete">
        <div className="content-text-delete-account">
          <p className="text-paragraph line-height-m">
            Si tienes algún problema con la aplicación o dudas sobre su
            funcionalidad nos puedes escribir al correo{" "}
            <span className="font-bold">hola@meredith-aesthetic.com</span> con
            gusto atenderemos tus dudas e inquietudes, solo pedimos que nos
            envies los siguientes datos:
          </p>
          <ul className="list-data-required">
            <li>
              <FaCheck className="check-list-data" />
              Fecha del suceso
            </li>
            <li>
              <FaCheck className="check-list-data" />
              Usuario
            </li>
            <li>
              <FaCheck className="check-list-data" />
              Descripción del incidente
            </li>
            <li>
              <FaCheck className="check-list-data" />
              Capturas del incidente
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
