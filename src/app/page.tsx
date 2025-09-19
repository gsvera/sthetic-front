import Image from "next/image";
import styles from "./page.module.css";
import MenuPage from "@/components/MenuPage";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={styles.page}>
      <MenuPage />
      <main className={styles.main}>
        <div className="banner-home-div"></div>
        <div className="container-body">
          <h1 className="title mb-3">Bienvenido a Meredith Aesthetic</h1>
          <p className="text-center line-height-m t-secondary text-size-m">
            El sitio web donde puedes encontrar y ofrecer servicios de estética,
            belleza y <br /> cuidado personal de forma rápida, segura y
            profesional.
          </p>
        </div>
        <div className="container-body d-flex">
          <div className="col-5 content-center">
            <img src="/about-left.webp" alt="Acerca de nosotros" />
          </div>
          <div className="col-5 p-7 div-center-xy">
            <div className="">
              <h2 className="mb-3">Quienes somos?</h2>
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
                  <FaCheckCircle className="check-list" /> Ver la calificación
                  del worker
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
            <div className="container-body d-flex">
              <div className="col-5 p-benefits">
                <h3 className="h3-subtitle mb-3">✨ Si eres cliente:</h3>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
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
                    <p className="text-paragraph line-height-m">
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
                    <p className="text-paragraph line-height-m">
                      Filtra por ubicación, especialidad, precio y reseñas de
                      otros usuarios.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
                      Reserva fácilmente tu cita en línea y mejora tu
                      experiencia de belleza y bienestar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 p-benefits">
                <h3 className="h3-subtitle mb-3">
                  💼 Si eres profesional de la belleza:
                </h3>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
                      Crea tu perfil y promociona tus servicios de estética,
                      peluquería, barbería o terapias de bienestar, entre otros.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
                      Muestra fotos de tu trabajo, lista tus precios y recibe
                      reseñas de clientes satisfechos.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
                      Consigue mayor visibilidad y nuevos clientes sin invertir
                      en publicidad costosa.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <FaCheck className="check-option" />
                  </div>
                  <div>
                    <p className="text-paragraph line-height-m">
                      Administra tus citas y mantén el control de tu agenda.
                    </p>
                  </div>
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
                  <Image
                    src={"/icons/hair-cutting.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
                    alt="Corte de cabello y barberia"
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
                  <Image
                    src={"/icons/nail-polish.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
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
                  <Image
                    src={"/icons/eyebrow.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
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
                  <Image
                    src={"/icons/facial.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
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
                  <Image
                    src={"/icons/massage-therapist.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
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
                  <Image
                    src={"/icons/hairdresser.png"}
                    className="img-card-services"
                    width={150}
                    height={150}
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
      </main>
    </div>
  );
}
