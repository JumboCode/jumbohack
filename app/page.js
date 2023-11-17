import styles from "./page.module.css";
import Image from "next/image";

import Example from "@/components/example";
import Typing from "@/components/typing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Typing />
    </main>
  );
}
