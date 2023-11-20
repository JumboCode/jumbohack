import styles from "./subtitle.module.css";

export default function Subtitle() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitleText}>
        <h3>Feb 24th-25th 2024</h3>
        <h3>Tufts University</h3>
      </div>
      <div className={styles.application}>
        <a href="https://forms.gle/Q2rVTUSmYRNWgq636" target="_blank">
          <button className={styles.apply}>Apply</button>
        </a>
      </div>
      <div className={styles.htmlTags}>
        <p>
          &lt;
          <span className={styles.tags}>html</span>{" "}
          <span id={styles.lang}>lang</span>=
          <span id={styles.love}>"love"</span>
          &gt;
        </p>
        <p className={styles.indent}>
          &lt;
          <span className={styles.tags}>h1</span>
          &gt;Hello, my-world!&lt;/<span className={styles.tags}>h1</span>
          &gt;
        </p>
        <p className={styles.indent}>
          &lt;<span className={styles.tags}>p</span>&gt;Will you be my
          Hackentine?&lt;/<span className={styles.tags}>p</span>&gt;
        </p>
        <p>
          &lt;/<span className={styles.tags}>html</span>&gt;
        </p>
      </div>
    </div>
  );
}
