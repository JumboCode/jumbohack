import Image from "next/image";
import styles from "./JudgeCard.module.css";

export default function JudgeCard({ image }) {
  return (
    <Image
      src={image}
      alt="judge"
      width={192}
      height={270}
      className={styles.judgeCard}
    />
  );
}
