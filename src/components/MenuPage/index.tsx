import Image from "next/image";
// import styles from "./page.module.css";
import styles from "@/app/page.module.css";

export const MenuPage = () => {
  return (
    <div
      className={`${styles.widthall} ${styles.dflex} ${styles.verticalcenter}`}
    >
      <div>
        <Image
          src="/meraesthetic-logo.png"
          alt="Meredith Aesthetic logo"
          width={70}
          height={70}
          priority
        />
      </div>
      <div className={styles.dcenter}>
        <div>Home</div>
        <div>Profesionistas</div>
      </div>
    </div>
  );
};

export default MenuPage;
