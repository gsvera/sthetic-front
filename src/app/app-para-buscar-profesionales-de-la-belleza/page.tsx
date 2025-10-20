import BannerHeader from "@/components/BannerHeader";
import ButtonApp from "@/components/ButtonApp";

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
        child={ChildBanner}
      />
      <div className="container-body">
        <div className="container-message-principal">
          <h2 className="title">
            Descarga la mejor app para agendar una cita con el profesional de la
            estética y cuidado personal de tu elección
          </h2>
          <p className="text-center line-height-m t-secondary text-size-m mt-5">
            Tienes la elección de elegir con que profesional agendar una cita
          </p>
        </div>
      </div>
      <div className="container-body"></div>
    </div>
  );
}
