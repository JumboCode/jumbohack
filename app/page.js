"use client";

import styles from "./page.module.css";

import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";
import { useState } from "react";

export default function Home() {
  const [backgroundOffset, setBackgroundOffset] = useState(0);

  const doScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setBackgroundOffset(scrollTop);
  };

  return (
    <main className={styles.main} onScroll={doScroll}>
      <Navbar />
      <Title />
      <Subtitle />
      <Countdown />
      <Background offset={backgroundOffset} />
    </main>
  );
}
