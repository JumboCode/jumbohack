import styles from "./page.module.css";
import Image from "next/image";

import Example from "@/components/example";
import Typing from "@/components/typing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Image
        src="/jumbohack_full.svg"
        alt="JumboHack Logo"
        width={400}
        height={96}
      />
      <p>Welcome to JumboHack, nerds</p>
      <Example />
      <Typing />
    </main>
  );
}
