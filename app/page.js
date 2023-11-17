import styles from "./page.module.css";

import Navbar from "@/components/Navbar";
import Typing from "@/components/typing";
import Subtitle from "@/components/subtitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Typing />
      <Subtitle />
    </main>
  );
}
