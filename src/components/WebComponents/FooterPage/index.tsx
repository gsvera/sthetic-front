import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import ButtonKnowMore from "../Buttons/ButtonKnowMore";

export const FooterPage = () => {
  return (
    <div className="footer">
      <div className="m-horizontal-auto row-grid">
        <div className="col-footer">
          <div className="content-center content-logo-footer">
            <Link href={"/"}>
              <img
                className="img-footer"
                src="/meredith-text-logo.png"
                alt="Logo Meredith Aesthetic"
              />
            </Link>
          </div>
          <div className="mty-1 content-center">
            <ButtonKnowMore
              textBtn="App cliente"
              href="/app-para-buscar-profesionales-de-la-belleza"
              styles="know-more-footer"
            />
          </div>
          <div className="mty-1 content-center">
            <ButtonKnowMore
              textBtn="App trabajo"
              href="/app-para-ofrecer-servicios-de-belleza-y-cuidado-personal"
              styles="know-more-footer"
            />
          </div>
        </div>
        <div className="col-footer">
          <h4 className="title-footer">Contáctanos</h4>
          <div className="mt-2 mt-mob-25">
            <Link
              href={"mailto:hola@meredith-aesthetic.com"}
              className="text-footer text-footer-link"
            >
              <AiOutlineMail /> hola@meredith-aesthetic.com
            </Link>
          </div>
          <div className="mt-1 mt-mob-25">
            <Link
              href={"tel:+9987578949"}
              className="text-footer text-footer-link"
            >
              <AiOutlinePhone /> +52 (998) 757 8949
            </Link>
          </div>
        </div>
        <div className="col-footer"></div>
        <div className="col-footer"></div>
      </div>
      <div className="copyright">
        <p className="text-light">
          © 2025 Abasotech Company | Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
