import styles from "./page.module.css";

import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <Background />
      <main className={styles.main}>
        <div id="home" />
        <Navbar />
        <Title />
        <Subtitle />
        <Countdown />
      </main>
    </>
  );
}
