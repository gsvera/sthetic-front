import BannerHeader from "@/components/WebComponents/BannerHeader";
import ButtonApp from "@/components/WebComponents/Buttons/ButtonApp";
import AnimatedImage from "@/components/WebComponents/Image/AnimatedImage";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

export default function AppClient() {
  const ChildBanner = (
    <div className="content-btn-single-app">
      <ButtonApp textBtn="App para cliente" href="" />
    </div>
  );
  return (
    <div>
      <BannerHeader
        slogan="Agende citas con los mejores profesionales de la belleza y cuidado personal"
        // child={ChildBanner}
      />
      <div className="container-body">
        <div className="container-message-principal">
          <h2 className="title">
            Descarga la mejor app para agendar una cita con el profesional de la
            estética y cuidado personal de tu elección
          </h2>
          <p className="text-center line-height-m t-secondary text-size-m mt-50">
            Tienes la elección de elegir con que profesional agendar una cita
          </p>
        </div>
      </div>
      <div className="container-body d-flex">
        <div className="content-benefits">
          <div className="col-benefits content-center-xy">
            <AnimatedImage
              src="/mujer-reservando.jpg"
              alt="Mujer reservando una cita"
              styles="img-benefits"
            />
          </div>
          <div className="col-benefits content-center-xy">
            <div className="content-text-benefits">
              <div>
                <p className="title-benefits mb-3">¿Porqué ser cliente?</p>
                <h2 className="subtitle-benefits">
                  SER CLIENTE NO CUESTA NADA, DESCARGA LA APP Y CREA TU CUENTA
                  GRATIS
                </h2>
                <p className="mt-5 text-benefits">
                  En Meredith Aesthetic puedes encontrar a los mejores
                  profesionales de la estética y cuidado personal, sabemos que
                  encontrar a un profesional puede ser una tarea tediosa, pero
                  en nuestra app los puedes encontrar de acuerdo a lo que
                  necesitas, puedes revisar las calificaciones y comentarios que
                  han tenido, al igual que un catálogo de sus trabajos
                  realizados, te preguntaras{" "}
                  <span className="text-bold">
                    ¿Cuáles son los beneficios de ser cliente?
                  </span>
                </p>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Tu decides con qué profesionista acudir
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Genera una cita rápido y fácil
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Califica el servicio del profesionista
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Cancela tus citas si lo requieres sin costo alguno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-body">
        <div>
          <p className="text-center subtitle">
            Descarga la app cliente en las tiendas oficiales
          </p>
          <div className="grid-space-between content-center wd-7 m-horizontal-auto">
            <div className="col-5 d-flex content-center mty-50">
              <div className="content-benefits">
                <AnimatedImage
                  src="/login-client.jpg"
                  alt="App cliente"
                  styles="img-demo-app"
                />
              </div>
            </div>
            <div className="col-5 wd-6 content-center-xy m-horizontal-auto">
              <div className="d-wrap content-benefits">
                <div className="wd-100 content-center m-vertical-20 content-img-download-app">
                  <Link href="">
                    <AnimatedImage
                      src="/google-play.avif"
                      alt="Google play"
                      styles="img-download-app"
                    />
                  </Link>
                </div>
                <div className="wd-100 content-center m-vertical-20 content-img-download-app">
                  <Link href={""}>
                    <AnimatedImage
                      src="/app-store.avif"
                      alt="App Store"
                      styles="img-download-app"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
