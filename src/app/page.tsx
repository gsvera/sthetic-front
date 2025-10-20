import styles from "./page.module.css";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import BannerHeader from "@/components/BannerHeader";
import ButtonApp from "@/components/ButtonApp";
import AnimatedImage from "@/components/Image/AnimatedImage";
import AnimatedIcon from "@/components/Image/AnimatedIcon";

export default function Home() {
  const buttonApps = (
    <div className="content-btn-app">
      <ButtonApp textBtn="App para cliente" href="" />
      <ButtonApp textBtn="App para dar servicio" href="" />
    </div>
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BannerHeader
          slogan="La app dedicado a profesionales de la belleza y cuidado personal"
          child={buttonApps}
        />

        <div className="container-body">
          <p className="title mb-3">Bienvenido a Meredith Aesthetic</p>
          <p className="text-center line-height-m t-secondary text-size-m">
            El software donde puedes encontrar y ofrecer servicios de estética,
            belleza y <br /> cuidado personal de forma rápida, segura y
            profesional.
          </p>
        </div>
        <div className="container-body d-flex">
          <AnimatedImage
            src="/about-left.webp"
            alt="Acerca de nosotros"
            styles=""
          />
          <div className="col-5 p-7 div-center-xy">
            <div className="">
              <h2 className="mb-3 t-outfit">¿Quiénes somos?</h2>
              <p className="text-subtitle mb-3">Calidad de estilo y belleza</p>
              <p className="text-paragraph line-height-m t-secondary ">
                Nuestra plataforma conecta a clientes que buscan especialistas
                con profesionales de la belleza que desean dar a conocer su
                trabajo y atraer nuevos clientes.
              </p>
              <ul className="list-style-one">
                <li>
                  <FaCheckCircle className="check-list" /> Cerca de ti
                </li>
                <li>
                  <FaCheckCircle className="check-list" /> Reserva tu cita
                </li>
                <li>
                  <FaCheckCircle className="check-list" /> Visualiza su trabajo
                  y recomendaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-body">
          <div>
            <h2 className="text-center subtitle">
              ¿Qué puedes hacer en Meredith Aesthetic?
            </h2>
            <div className="container-body">
              <div className="content-benefits">
                <div className="col-benefits">
                  <AnimatedImage
                    src="/cliente-salon-de-belleza.jpg"
                    alt="Cliente de meredith aesthetic"
                    styles="img-benefits"
                  />
                </div>
                <div className="col-benefits content-text-benefits">
                  <div>
                    <h3 className="subtitle-benefits mb-3">Si eres cliente</h3>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Encuentra salones de belleza, barberías, lashistas,
                          podólogos y especialistas en estética cerca de ti.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Explora servicios como manicure, pedicure, faciales,
                          masajes, depilación láser, tratamientos corporales,
                          maquillaje profesional y mucho más.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Filtra por ubicación, especialidad, precio y reseñas
                          de otros usuarios.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Reserva fácilmente tu cita en línea y mejora tu
                          experiencia de belleza y bienestar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-benefits">
                <div className="col-benefits content-text-benefits">
                  <div>
                    <h3 className="subtitle-benefits mb-3">
                      Si eres profesional de la belleza:
                    </h3>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Crea tu perfil y promociona tus servicios de estética,
                          peluquería, barbería o terapias de bienestar, entre
                          otros.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Muestra fotos de tu trabajo, lista tus precios y
                          recibe reseñas de clientes satisfechos.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Consigue mayor visibilidad y nuevos clientes sin
                          invertir en publicidad costosa.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <div>
                        <FaCheck className="check-option" />
                      </div>
                      <div>
                        <p className="text-benefits">
                          Administra tus citas y mantén el control de tu agenda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-benefits">
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
        <div className="container-body">
          <h2 className="text-center subtitle">
            Servicios más buscados en nuestra plataforma
          </h2>
          <div className="content-card-services mty-50">
            <div className="card-services-one">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src="/icons/hair-cutting.png"
                    alt="Corte de cabello y barberia"
                    styles="img-card-services"
                  />
                </div>
                <h3 className="title-card-services">Peluquería y barbería</h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Cortes modernos, coloración, balayage, keratina, diseño y
                    tinte de barba.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-services-two">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src={"/icons/nail-polish.png"}
                    styles="img-card-services"
                    alt="Manicure y pedicure"
                  />
                </div>
                <h3 className="title-card-services">Manicure y pedicure</h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Uñas acrílicas, gelish, decoración, parafina para manos y
                    pies.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-services-one">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src={"/icons/eyebrow.png"}
                    styles="img-card-services"
                    alt="Cejas y pestañas"
                  />
                </div>
                <h3 className="title-card-services">Cejas y pestañas</h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Lashista, laminado, tinte y diseño personalizado.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-services-two">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src={"/icons/facial.png"}
                    styles="img-card-services"
                    alt="Tratamientos faciales y corporales"
                  />
                </div>
                <h3 className="title-card-services">
                  Tratamientos faciales y corporales
                </h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Limpieza facial profunda, microdermoabrasión, peeling
                    químico, radiofrecuencia, tratamientos reductores.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-services-one">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src={"/icons/massage-therapist.png"}
                    styles="img-card-services"
                    alt="Bienestar y relajación"
                  />
                </div>
                <h3 className="title-card-services">Bienestar y relajación</h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Masajes terapéuticos, relajantes, linfáticos, reflexología,
                    aromaterapia y bronceado sin sol.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-services-two">
              <div>
                <div className="d-flex">
                  <AnimatedIcon
                    src={"/icons/hairdresser.png"}
                    styles="img-card-services"
                    alt="Imagen personal"
                  />
                </div>
                <h3 className="title-card-services">Imagen personal</h3>
                <div className="content-text-card-services">
                  <p className="description-card-services">
                    Maquillaje profesional, asesoría de imagen y personal
                    shopper.
                  </p>
                  <div className="content-view-more">
                    <a href="#" className="view-more">
                      Ver más
                      <FaArrowRightLong style={{ marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-body content-width-7">
          <h2 className="text-center subtitle">
            ¿Por qué elegir Meredith Aesthetic?
          </h2>
          <div className="container-body">
            <div className="d-flex content-center mt-5">
              <div>
                <FaCheck className="check-option" />
              </div>
              <div>
                <p className="text-selection">
                  Amplia red de profesionales de la estética y la belleza.
                </p>
              </div>
            </div>

            <div className="d-flex content-center mt-5">
              <div>
                <FaCheck className="check-option" />
              </div>
              <div>
                <p className="text-selection">
                  Comparte y recibe reseñas reales para elegir con confianza.
                </p>
              </div>
            </div>

            <div className="d-flex content-center mt-5">
              <div>
                <FaCheck className="check-option" />
              </div>
              <div>
                <p className="text-selection">
                  Agenda y organiza tus servicios desde un solo lugar.
                </p>
              </div>
            </div>

            <div className="d-flex content-center mt-5">
              <div>
                <FaCheck className="check-option" />
              </div>
              <div>
                <p className="text-selection">
                  Una comunidad enfocada en resaltar la belleza y el bienestar
                  personal.
                </p>
              </div>
            </div>

            <div className="d-flex content-center mt-5">
              <div>
                <FaCheck className="check-option" />
              </div>
              <div>
                <p className="text-selection">
                  Ya sea que quieras encontrar al mejor especialista cerca de ti
                  o registrarte como profesional de la estética, en Meredith
                  Aesthetic lo tienes todo en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
