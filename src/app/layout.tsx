import type { Metadata } from "next";
import "./globals.css";
import MenuPage from "@/components/WebComponents/MenuPage";
import FooterPage from "@/components/WebComponents/FooterPage";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AlertCookies from "@/components/WebComponents/AlertCookies";
import { NotificationProvider } from "@/providers/NotificationProvider";

export const medatata: Metadata = {
  openGraph: {
    type: "website",
    title: "Encuentra Profesionales de Belleza | Agenda Servicios Cerca de Ti",
    description:
      "Encuentra y compara profesionales de belleza verificados: manicure, maquillaje, barbería, masajes y más. Filtra por ubicación, calificaciones y disponibilidad para reservar en minutos.",
    url: "https://meredith-aesthetic.com/encuentra-profesionales-belleza",
    siteName: "Meredith Aesthetic",
    images: {
      url: "https://meredith-aesthetic.com/banner-home.png",
      alt: "Profesionales de belleza - Meredith Aesthetic",
      width: "1200",
      height: "600",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <ReactQueryProvider>
          <NotificationProvider>
            <MenuPage />
            {children}
            <FooterPage />
          </NotificationProvider>
        </ReactQueryProvider>
        <AlertCookies />
      </body>
    </html>
  );
}
