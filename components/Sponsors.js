import styles from "./Sponsors.module.css";
import Image from "next/image";

export default function Sponsors() {
  const coinSize = 94;
  return (
    <div className={styles.container}>
      <div className={styles.gold}>
        <div className={styles.sponsorList}>
          <Image src="/gold_coin.svg" width={coinSize} height={coinSize} />
          <h2>GOLD TIER</h2>
          <Image src="/love-letter.png" width={250} height={150} />
          <Image src="/love-letter.png" width={250} height={150} />
        </div>
      </div>
      <div className={styles.silver}>
        <div className={styles.sponsorList}>
          <Image src="/silver_coin.svg" width={250} height={coinSize} />
          <h2>SILVER TIER</h2>
          <Image src="/love-letter.png" width={250} height={150} />
        </div>
      </div>
      <div className={styles.bronze}>
        <div className={styles.sponsorList}>
          <Image src="/bronze_coin.svg" width={250} height={coinSize} />
          <h2>BRONZE TIER</h2>
          <Image src="/love-letter.png" width={250} height={150} />
          <Image src="/love-letter.png" width={250} height={150} />
          <Image src="/love-letter.png" width={250} height={150} />
        </div>
      </div>
    </div>
  );
}
