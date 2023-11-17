import styles from "./page.module.css";

import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import Typing from "@/components/typing";
import Subtitle from "@/components/subtitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Typing />
      <Subtitle />
      <Countdown />
    </main>
  );
}
