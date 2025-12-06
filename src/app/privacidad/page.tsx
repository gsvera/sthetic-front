import TextPrivacy from "@/components/WebComponents/TextPrivacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Meredith Aesthetic",
  description:
    "Conoce cómo protegemos y manejamos tus datos personales en la plataforma Meredith Aesthetic.",
  alternates: {
    canonical: "https://meredith-aesthetic.com/privacidad",
  },
};

export default function Privacy() {
  return (
    <div className="content-privacy">
      <TextPrivacy />
    </div>
  );
}
