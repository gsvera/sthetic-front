import BannerHeader from "@/components/WebComponents/BannerHeader";
import AnimatedImage from "@/components/WebComponents/Image/AnimatedImage";
import { Metadata } from "next";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Buscar Profesionales de Belleza | Agenda Servicios Cerca de Ti",
  description:
    "Encuentra profesionales de belleza verificados y agenda servicios como manicure, maquillaje, barbería, masajes y más. Busca por ubicación, precio y disponibilidad en tiempo real.",
  keywords:
    "profesionales de belleza cerca, profesionales de estética, especialistas en belleza, búsqueda de servicios de belleza, encontrar expertos de belleza",
  alternates: {
    canonical: "https://meredith-aesthetic.com/buscar-profesional-belleza",
  },
};

export default function AppClient() {
  return (
    <div>
      <BannerHeader
        slogan="Agenda tus citas con los mejores profesionales de la belleza y el cuidado personal."
        bannerStyle="background-client"
      />
      <div className="container-body">
        <div className="container-message-principal">
          <h2 className="title">
            Descarga la mejor app para agendar citas con el profesional de
            estética y cuidado personal que tú elijas.
          </h2>
          <p className="text-center line-height-m t-secondary text-size-m mt-50">
            Tienes la elección de elegir con que profesional agendar una cita
          </p>
        </div>
      </div>
      <div className="container-body d-flex wd-mob-9 m-horizontal-mob-auto">
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
                  En Meredith Aesthetic encontrarás a los mejores profesionales
                  de la estética y el cuidado personal. Sabemos que buscar al
                  especialista ideal puede ser complicado, pero en nuestra app
                  puedes hacerlo de forma fácil y personalizada: revisa
                  calificaciones, comentarios y un catálogo de trabajos
                  realizados para elegir con total confianza. Ahora bien…
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
                      Tú decides con qué profesional acudir.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Programa tu cita de forma rápida y sencilla.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Califica la calidad del servicio recibido.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Cancela tus citas cuando lo necesites.
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
          <p className="text-center subtitle mt-mob-grl">
            Descarga la app para clientes desde las tiendas oficiales y comienza
            gratis.
          </p>
          <div className="grid-space-between content-center wd-7 m-horizontal-auto">
            <div className="col-5 d-flex content-center mty-50">
              <div className="content-benefits img-mob-center">
                <AnimatedImage
                  src="/login-client.jpg"
                  alt="App cliente"
                  styles="img-demo-app"
                />
              </div>
            </div>
            <div className="col-5 wd-6 content-center-xy m-horizontal-auto">
              <div className="d-wrap content-benefits">
                <div className="wd-100 content-center m-vertical-20">
                  <div className="content-img-download-app img-mob-center">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.abasotech.meredithcare&pcampaignid=web_share"
                      target="_blank"
                    >
                      <AnimatedImage
                        src="/google-play.avif"
                        alt="Google play"
                        styles="img-download-app"
                      />
                    </Link>
                  </div>
                </div>
                <div className="wd-100 content-center m-vertical-20">
                  <div className="content-img-download-app img-mob-center">
                    <Link
                      href={
                        "https://apps.apple.com/mx/app/meredith-aesthetic/id6754884092"
                      }
                      target="_blank"
                    >
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
    </div>
  );
}
