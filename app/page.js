import styles from "./page.module.css";

import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Title />
      <Subtitle />
      <Countdown />
    </main>
  );
}
