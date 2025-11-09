"use client";
import { useEffect, useState } from "react";
import "./index.scss";

export const AlertCookies = () => {
  const [acceptCookies, setAcceptCookies] = useState(true);

  useEffect(() => {
    const cookies = localStorage.getItem("acceptCookies");
    if (!cookies) {
      setAcceptCookies(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("acceptCookies", "accept");
    setAcceptCookies(true);
  };

  return (
    <>
      {acceptCookies ? (
        <></>
      ) : (
        <div className="alert-cookies">
          <div>
            <p className="text-alert-cookies">
              Utilizamos cookies para asegurar una mejor experiencia de usuario
              en nuestro sitio web. <br />
              Si continúa utilizando este sitio asumiremos que está de acuerdo.
            </p>
          </div>
          <div>
            <button
              className="btn-alert-cookies"
              type="button"
              onClick={handleAcceptCookies}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertCookies;
