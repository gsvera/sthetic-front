import SearchWorkers from "@/components/WebViews/SearchWorkers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encuentra Profesionales de Belleza | Agenda Servicios Cerca de Ti",
  description:
    "Encuentra y compara profesionales de belleza verificados: manicure, maquillaje, barbería, masajes y más. Filtra por ubicación, calificaciones y disponibilidad para reservar en minutos, app para agendar servicios de belleza",
  keywords:
    "encuentra profesionales de belleza, expertos de belleza, profesionales de belleza cerca de ti, servicios de belleza cerca, agenda servicios de belleza",
  alternates: {
    canonical: "https://meredith-aesthetic.com/encuentra-profesionales-belleza",
  },
};

export default function FindWorker() {
  return (
    <div>
      <SearchWorkers />
    </div>
  );
}
