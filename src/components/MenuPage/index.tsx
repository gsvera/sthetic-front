import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export const MenuPage = () => {
  return (
    <div className={`${styles.menuweb}`}>
      <div className={`${styles.contentmenu}`}>
        <div>
          <Link href={"/"}>
            <Image
              src="/meredith-text-logo.png"
              alt="Meredith Aesthetic logo"
              width={120}
              height={45}
              priority
            />
          </Link>
        </div>
        <div className={`espacebetween widthall list-menu`}>
          <div className="text-menu">
            <Link href={"/encuentra-profesionales-de-la-belleza"}>
              Encuentra a un profesionistas
            </Link>
          </div>
          <div className="text-menu">
            <Link href={"/app-para-buscar-profesionales-de-la-belleza"}>
              Quiero ser cliente
            </Link>
          </div>
          <div className="text-menu">
            <Link
              href={"/app-para-ofrecer-servicios-de-belleza-y-cuidado-personal"}
            >
              Quiero ofrecer mis servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
