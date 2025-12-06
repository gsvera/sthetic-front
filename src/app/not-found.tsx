import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
};

export default function Custom404() {
  return (
    <div>
      <div className="banner-simple">
        <div className="text-center">
          <h1 className="title-banner-simple">404</h1>
          <p className="text-banner-simple">Página no encontrada</p>
        </div>
      </div>
    </div>
  );
}
