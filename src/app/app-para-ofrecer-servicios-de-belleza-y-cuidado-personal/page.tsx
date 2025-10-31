"use client";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import BannerHeader from "@/components/WebComponents/BannerHeader";
import AnimatedImage from "@/components/WebComponents/Image/AnimatedImage";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { apiTypeService } from "@/api/catalog/";
import { ResponseApi } from "@/api/responseApi";
import { TypeServiceType } from "@/constans/GeneralType";
import { TypeServiceCard } from "@/components/WebComponents/TypeServiceCard";

export default function AppWorker() {
  const { data: listTypeService = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.getTypeServices("types-services")],
    queryFn: () => apiTypeService.getAll(),
    ...{
      select: (data: ResponseApi) => data.data.items as TypeServiceType[],
    },
  });

  return (
    <div>
      <BannerHeader
        slogan="Administra tus citas y adquiere nuevos clientes"
        bannerStyle="background-work"
      />
      <div className="container-body">
        <div className="container-message-principal">
          <h2 className="title">
            Descarga la mejor app para administrar tus citas y ser más visible
            para nuevos clientes
          </h2>
          <p className="text-center line-height-m t-secondary text-size-m mt-50">
            Administrar las citas de tus clientes y adquirir nuevos clientes
            todo en una sola app
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
                  Con Meredith Aesthetic puedes administrar las citas de tus
                  clientes y alcanzar a ser más visible y poder captar nuevos
                  clientes, asi como tu te esfuerzas a dar un servicio de
                  calidad a tus clientes, nosotros nos esforzamos en darte una
                  mejor calidad de nuestro software para facilitar esas tareas
                  que pudieran llegar a ser tediosas y asi tu te enfoques mas en
                  tu servicio al cliente.{" "}
                  <span className="text-bold">
                    ¿Cuáles son los beneficios de adquirir nuestra app?
                  </span>
                </p>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Administra las citas de tus clientes
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Ser más visible para nuevos clientes
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Tú administras tus propios precios
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-5">
                  <div>
                    <GiCheckMark className="check-option" />
                  </div>
                  <div>
                    <p className="text-benefits-dark">
                      Notificaciones en tiempo real de citas de nuevos clientes
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
            Descarga la app de trabajo en las tiendas oficiales
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
                  <div className="content-img-download-app-disabled img-mob-center">
                    <Link href={""}>
                      <AnimatedImage
                        src="/app-store.avif"
                        alt="App Store"
                        styles="img-download-app disabled-app"
                      />
                    </Link>
                    <div className="next-time">Próximamente</div>
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
          {listTypeService.length > 0
            ? listTypeService?.map((item: TypeServiceType) => (
                <TypeServiceCard
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  typeServiceNameEs={item.typeServiceNameEs}
                  descriptionEs={item.typeServiceNameEs}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
