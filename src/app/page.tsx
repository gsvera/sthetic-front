import Image from "next/image";
import styles from "./page.module.css";
import MenuPage from "@/components/MenuPage";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <MenuPage /> */}
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/meraesthetic-logo.png"
            alt="Meredith Aesthetic logo"
            width={170}
            height={170}
            priority
          />
        </div>
        <h1 className="title">Bienvenido a Meredith Aesthetic</h1>
        <p className="text-center">Página en construcción...</p>
      </main>
    </div>
  );
}
