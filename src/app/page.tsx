import styles from "./page.module.css";
import { FaCheck } from "react-icons/fa";
import BannerHeader from "@/components/WebComponents/BannerHeader";
import ButtonApp from "@/components/WebComponents/Buttons/ButtonApp";
import AnimatedImage from "@/components/WebComponents/Image/AnimatedImage";
import CardTypeServices from "@/components/WebComponents/CardTypeServices";
import { GiCheckMark } from "react-icons/gi";
import ButtonKnowMore from "@/components/WebComponents/Buttons/ButtonKnowMore";

export default function Home() {
  const buttonApps = (
    <div className="content-btn-app">
      <ButtonApp
        textBtn="App para cliente"
        href="/app-para-buscar-profesionales-de-la-belleza"
      />
      <ButtonApp
        textBtn="App para dar servicio"
        href="/app-para-ofrecer-servicios-de-belleza-y-cuidado-personal"
      />
    </div>
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BannerHeader
          bannerStyle="background-home"
          slogan="Conecta clientes con profesionales de la belleza con pocos clics"
          child={buttonApps}
        />

        <div className="container-body">
          <p className="title mb-3">Bienvenido a Meredith Aesthetic</p>
          <div className="wd-6 wd-mob-9 m-horizontal-auto">
            <p className="text-center line-height-m t-secondary text-size-m">
              La plataforma donde puedes encontrar y ofrecer servicios de
              estética, belleza y cuidado personal de manera rápida, segura y
              profesional.
            </p>
          </div>
        </div>
        <div className="container-body content-center">
          <div className="col-5 content-center-xy">
            <AnimatedImage
              src="/about-left.webp"
              alt="Acerca de nosotros"
              styles="img-home-somos"
            />
          </div>
          <div className="col-5 p-7 mt-mob-grl div-center-xy">
            <div className="">
              <h2 className="mb-3 t-outfit c-action">¿Quiénes somos?</h2>
              <p className="text-subtitle mb-3">Calidad de estilo y belleza</p>
              <p className="text-paragraph line-height-m t-secondary ">
                Nuestra plataforma conecta a quienes buscan experiencias de
                belleza excepcionales con profesionales talentosos que desean
                destacar su trabajo, impulsar su presencia y atraer nuevos
                clientes. Creamos un espacio confiable, moderno y elegante donde
                cada especialista puede mostrar lo mejor de su talento y cada
                cliente encuentra exactamente lo que necesita.
              </p>
              <ul className="list-style-one">
                <li>
                  <GiCheckMark className="check-list" /> Encuentra profesionales
                  cerca de ti
                </li>
                <li>
                  <GiCheckMark className="check-list" /> Reserva tu cita de
                  forma rápida y segura
                </li>
                <li>
                  <GiCheckMark className="check-list" /> Explora su trabajo,
                  valoraciones y recomendaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-body containter-mob mt-mob-grl">
          <div>
            <h2 className="text-center subtitle">
              ¿Qué puedes hacer en Meredith Aesthetic?
            </h2>
            <div className="container-body">
              <div className="content-benefits">
                <div className="col-benefits content-center-xy">
                  <AnimatedImage
                    src="/cliente-salon-de-belleza.jpg"
                    alt="Cliente de meredith aesthetic"
                    styles="img-benefits"
                  />
                </div>
                <div className="col-benefits content-text-benefits">
                  <div>
                    <p className="title-benefits mb-3">
                      Para ti que eres cliente
                    </p>
                    <h2 className="subtitle-benefits">
                      RESERVA LOS MEJORES ESPECIALISTAS EN MINUTOS
                    </h2>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Encuentra especialistas de belleza cerca de ti y
                          descubre servicios como faciales, masajes, manicure,
                          depilación láser y más.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Filtra por ubicación, precio y valoraciones, y reserva
                          tu cita en segundos para vivir una experiencia de
                          belleza y bienestar a tu medida.
                        </p>
                      </div>
                    </div>
                    <div className="mt-20">
                      <ButtonKnowMore
                        textBtn="Empieza gratis"
                        href="/app-para-buscar-profesionales-de-la-belleza"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-benefits reverse-mob-col">
                <div className="col-benefits content-text-benefits">
                  <div>
                    <p className="title-benefits mb-3">
                      Si eres profesional de la belleza y/o cuidado personal
                    </p>
                    <h2 className="subtitle-benefits">
                      ADMINISTRA TU TIEMPO Y SE VISIBLE PARA MÁS CLIENTES
                    </h2>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Crea tu perfil profesional y promociona tus servicios
                          de belleza, barbería o bienestar.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Comparte fotos de tu trabajo, muestra tus precios y
                          recibe valoraciones de tus clientes.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Aumenta tu visibilidad y atrae nuevos clientes sin
                          invertir en publicidad.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <GiCheckMark className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Gestiona tus citas y mantén el control total de tu
                          agenda.
                        </p>
                      </div>
                    </div>
                    <div className="mt-20">
                      <ButtonKnowMore
                        textBtn="Empieza a ganar más con Meredith"
                        href="/app-para-ofrecer-servicios-de-belleza-y-cuidado-personal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-benefits content-center-xy">
                  <AnimatedImage
                    src="/profesional-meredith-aesthetic.jpg"
                    alt="Cliente de meredith aesthetic"
                    styles="img-benefits"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-body mt-mob-grl">
          <h2 className="text-center subtitle">
            Servicios más buscados en nuestra plataforma
          </h2>
          <div className="content-card-services mty-50">
            <CardTypeServices
              classNameComponent="card-services-one"
              srcImageIcon="/icons/hair-cutting.png"
              altImageIcon="Corte de cabello y barberia"
              titleCard="Peluquería y barbería"
              descriptionCard="Cortes modernos, coloración, balayage, keratina, diseño y
                    tinte de barba."
              href=""
            />
            <CardTypeServices
              classNameComponent="card-services-two"
              srcImageIcon="/icons/nail-polish.png"
              altImageIcon="Manicure y pedicure"
              titleCard="Manicure y pedicure"
              descriptionCard="Uñas acrílicas, gelish, decoración, parafina para manos y
                    pies."
              href=""
            />
            <CardTypeServices
              classNameComponent="card-services-one"
              srcImageIcon="/icons/eyebrow.png"
              altImageIcon="Cejas y pestañas"
              titleCard="Cejas y pestañas"
              descriptionCard="Lashista, laminado, tinte y diseño personalizado."
              href=""
            />
            <CardTypeServices
              classNameComponent="card-services-two"
              srcImageIcon="/icons/facial.png"
              altImageIcon="Tratamientos faciales y corporales"
              titleCard="Tratamientos faciales y corporales"
              descriptionCard="Limpieza facial profunda, microdermoabrasión, peeling
                    químico, radiofrecuencia, tratamientos reductores."
              href=""
            />

            <CardTypeServices
              classNameComponent="card-services-one"
              srcImageIcon="/icons/massage-therapist.png"
              altImageIcon="Bienestar y relajación"
              titleCard="Bienestar y relajación"
              descriptionCard="Masajes terapéuticos, relajantes, linfáticos, reflexología,
                    aromaterapia y bronceado sin sol."
              href=""
            />
            <CardTypeServices
              classNameComponent="card-services-two"
              srcImageIcon="/icons/hairdresser.png"
              altImageIcon="Imagen personal"
              titleCard="Imagen personal"
              descriptionCard="Maquillaje profesional, asesoría de imagen y personal
                    shopper."
              href=""
            />
          </div>
        </div>
        <div className="container-body">
          <div className="wd-7 m-horizontal-auto wd-mob-9 mb-mob-grl">
            <h2 className="text-center subtitle">
              ¿Por qué elegir Meredith Aesthetic?
            </h2>
            <div className="container-body">
              <div className="d-flex content-center mt-5">
                <div className="icon-selection">
                  <FaCheck className="check-option" />
                </div>
                <div>
                  <p className="text-selection">
                    Una red creciente de profesionales de la estética y la
                    belleza, listos para ti.
                  </p>
                </div>
              </div>

              <div className="d-flex content-center mt-5">
                <div className="icon-selection">
                  <FaCheck className="check-option" />
                </div>
                <div>
                  <p className="text-selection">
                    Comparte y descubre reseñas auténticas para elegir con total
                    confianza.
                  </p>
                </div>
              </div>

              <div className="d-flex content-center mt-5">
                <div className="icon-selection">
                  <FaCheck className="check-option" />
                </div>
                <div>
                  <p className="text-selection">
                    Agenda, organiza y gestiona tus servicios desde un solo
                    lugar.
                  </p>
                </div>
              </div>

              <div className="d-flex content-center mt-5">
                <div className="icon-selection">
                  <FaCheck className="check-option" />
                </div>
                <div>
                  <p className="text-selection">
                    Una comunidad dedicada a resaltar la belleza, el bienestar y
                    el cuidado personal.
                  </p>
                </div>
              </div>

              <div className="d-flex content-center mt-5">
                <div className="icon-selection">
                  <FaCheck className="check-option" />
                </div>
                <div>
                  <p className="text-selection">
                    Ya sea que busques al mejor especialista cerca de ti o
                    desees registrarte como profesional, en Meredith Aesthetic
                    encuentras todo en un solo lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
