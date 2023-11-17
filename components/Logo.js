import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <a href="#" className={styles.logoContainer}>
      <Image
        src="/jumbocode_icon.svg"
        alt="JumboCode Icon"
        width={32}
        height={32}
      />
      <span>
        Jumbo
        <span className={styles.colored}>Code</span>
      </span>
    </a>
  );
}
