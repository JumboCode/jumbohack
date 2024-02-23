import { applyUrl } from "@/app/config";
import styles from "./subtitle.module.css";

export default function Subtitle() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitleText}>
        <h3>Feb 17th-18th 2024</h3>
        <h3>Tufts University</h3>
      </div>
      <div className={styles.application}>
        <a href={applyUrl} target="_blank">
          <button className={styles.apply}>
            Apply to Organize JumboHack 2025
          </button>
        </a>
      </div>
    </div>
  );
}
