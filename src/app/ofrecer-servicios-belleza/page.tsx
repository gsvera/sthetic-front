import BannerHeader from "@/components/WebComponents/BannerHeader";
import AnimatedImage from "@/components/WebComponents/Image/AnimatedImage";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { Metadata } from "next";
import ListTypeServices from "@/components/WebComponents/ListTypeServices";

export const metadata: Metadata = {
  title: "Ofrecer Servicios de Belleza | Únete como Profesional",
  description:
    "Regístrate como profesional de belleza y aumenta tu cartera de clientes. Publica tus servicios, gestiona tu agenda y recibe pagos de forma segura.",
  keywords:
    "ofrecer servicios de belleza, registrar profesional de belleza, app para profesionales de belleza, publicar servicios de estética, captar clientes de belleza, plataforma para profesionales de belleza",
  alternates: {
    canonical: "https://meredith-aesthetic.com/ofrecer-servicios-belleza",
  },
};

export default function AppWorker() {
  return (
    <div>
      <BannerHeader
        slogan="Gestiona tus citas con facilidad y atrae nuevos clientes a tu negocio."
        bannerStyle="background-work"
      />
      <div className="container-body">
        <div className="container-message-principal">
          <h2 className="title">
            Descarga la mejor app para administrar tus citas y aumentar tu
            visibilidad para atraer nuevos clientes.
          </h2>
          <p className="text-center line-height-m t-secondary text-size-m mt-50">
            Administra las citas de tus clientes y atrae nuevos prospectos, todo
            desde una sola app.
          </p>
        </div>
      </div>
      <div className="container-body d-flex wd-mob-9 m-horizontal-mob-auto">
        <div className="content-benefits">
          <div className="col-benefits content-center-xy">
            <AnimatedImage
              src="/mujer-administrando-citas.jpg"
              alt="Mujer reservando una cita"
              styles="img-benefits"
            />
          </div>
          <div className="col-benefits content-center-xy">
            <div className="content-text-benefits">
              <div>
                <p className="title-benefits mb-3">
                  ¿Porqué adquirir la app de Meredith Aesthetic?
                </p>
                <h2 className="subtitle-benefits">
                  LA MEJOR INVERSIÓN PARA HACER CRECER TU NEGOCIO DE FORMA
                  SENCILLA
                </h2>
                <p className="mt-5 text-benefits">
                  Con Meredith Aesthetic puedes gestionar fácilmente las citas
                  de tus clientes, aumentar tu visibilidad y atraer nuevas
                  oportunidades. Así como tú te esfuerzas en brindar un servicio
                  de calidad, nosotros trabajamos para ofrecerte una plataforma
                  confiable, moderna y eficiente que simplifica las tareas más
                  tediosas, permitiéndote enfocarte en lo que realmente importa:
                  tus clientes. Ahora bien…
                  <span className="text-bold">
                    ¿cuáles son los beneficios de adquirir nuestra app?
                  </span>
                </p>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Administra las citas de tus clientes de forma fácil y
                      organizada.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Aumenta tu visibilidad y llega a nuevos clientes.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Controla y ajusta tus propios precios cuando lo necesites.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Recibe notificaciones en tiempo real cada vez que un nuevo
                      cliente agende contigo.
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
            Descarga la app para profesionales desde las tiendas oficiales.
          </p>
          <div className="grid-space-between content-center wd-7 m-horizontal-auto">
            <div className="col-5 d-flex content-center mty-50">
              <div className="content-benefits img-mob-center">
                <AnimatedImage
                  src="/login-work.jpg"
                  alt="App cliente"
                  styles="img-demo-app"
                />
              </div>
            </div>
            <div className="col-5 wd-6 content-center-xy m-horizontal-auto">
              <div className="d-wrap content-benefits">
                <div className="wd-100 content-center m-vertical-20 content-img-download-app img-mob-center">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.abasotech.meredithcarework&pcampaignid=web_share"
                    target="_blank"
                  >
                    <AnimatedImage
                      src="/google-play.avif"
                      alt="Google play"
                      styles="img-download-app"
                    />
                  </Link>
                </div>
                <div className="wd-100 content-center m-vertical-20 ">
                  <div className="content-img-download-app img-mob-center">
                    <Link
                      href={
                        "https://apps.apple.com/mx/app/meredith-aesthetic-work/id6754846887"
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

      <div className="container-body mb-100">
        <h2 className="subtitle text-center mb-3 mt-mob-grl">
          Tipos de negocio para la app
        </h2>
        <div className="wd-6 m-horizontal-auto mb-4">
          <p className="text-center line-height-m t-secondary text-size-m">
            Si tu negocio brinda alguno de estos tipos de servicio, entonces
            deberías adquirir la app de trabajo para darle un plus a tu negocio
          </p>
        </div>
        <div className="content-type-service-card">
          <ListTypeServices />
        </div>
      </div>
    </div>
  );
}
