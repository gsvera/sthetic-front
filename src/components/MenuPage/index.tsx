import Image from "next/image";
import styles from "@/app/page.module.css";

export const MenuPage = () => {
  return (
    <div className={`${styles.menuweb}`}>
      <div className={`${styles.contentmenu}`}>
        <div className={styles.contentlogo}>
          <Image
            src="/meraesthetic-logo.png"
            alt="Meredith Aesthetic logo"
            width={70}
            height={70}
            priority
          />
        </div>
        <div className={`${styles.dspacebetween} ${styles.widthall}`}>
          <div className="text-menu">Inicio</div>
          <div className="text-menu">Servicios</div>
          <div className="text-menu">Quiero ofrecer mis servicios</div>
          <div className="text-menu">Descarga la app</div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
