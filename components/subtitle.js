import styles from "./subtitle.module.css";

export default function Subtitle() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitleText}>
        <h3>Feb 17th-18th 2024</h3>
        <h3>Tufts University</h3>
      </div>
      <div className={styles.application}>
        <a href="https://forms.gle/syRYeE12tt5qGaES6" target="_blank">
          <button className={styles.apply}>Apply</button>
        </a>
      </div>
    </div>
  );
}
