import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/meraesthetic-logo.png"
          alt="Meredith Aesthetic logo"
          width={180}
          height={180}
          priority
        />
      </main>
    </div>
  );
}
