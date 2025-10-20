import BannerHeader from "@/components/BannerHeader";
import ButtonApp from "@/components/ButtonApp";

export default function AppWorker() {
  const ChildBanner = (
    <div className="content-btn-single-app">
      <ButtonApp textBtn="App para profesionistas" href="" />
    </div>
  );
  return (
    <div>
      <BannerHeader
        slogan="Administra tus citas y adquiere nuevos clientes"
        child={ChildBanner}
      />
    </div>
  );
}
