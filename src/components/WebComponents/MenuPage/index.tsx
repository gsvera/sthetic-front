"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import "./index.scss";

export const MenuPage = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <div className={`menu-mer`}>
      <div className={`${styles.contentmenu}`}>
        <div className="d-flex-mobile menu-mobile">
          <Link href={"/"}>
            <img
              src="/meredith-text-logo.png"
              alt="Meredith Aesthetic logo"
              className="logo-menu"
            />
          </Link>
          <div className="d-only-mobile content-center-xy">
            <div>
              <LuMenu
                className="icon-menu"
                onClick={() => setShowMenuMobile((v) => !v)}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            showMenuMobile ? "menu-mobile-items" : "d-only-desktop menu-desktop"
          }`}
        >
          <div
            className={`${
              showMenuMobile
                ? "menu-list-item-mobile"
                : "espacebetween wd-10 list-menu"
            }`}
          >
            <div className="text-menu">
              <Link
                href={"/encuentra-profesionales-de-la-belleza"}
                onClick={() => setShowMenuMobile(false)}
              >
                Encuentra a un profesionistas
              </Link>
            </div>
            <div className="text-menu">
              <Link
                href={"/app-para-buscar-profesionales-de-la-belleza"}
                onClick={() => setShowMenuMobile(false)}
              >
                Quiero ser cliente
              </Link>
            </div>
            <div className="text-menu">
              <Link
                href={
                  "/app-para-ofrecer-servicios-de-belleza-y-cuidado-personal"
                }
                onClick={() => setShowMenuMobile(false)}
              >
                Quiero ofrecer mis servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
