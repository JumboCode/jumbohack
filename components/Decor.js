import styles from "./Decor.module.css";

export function HTMLTags() {
  return (
    <div className={styles.htmlTags}>
      <p>
        &lt;
        <span className={styles.tags}>html</span>{" "}
        <span id={styles.lang}>lang</span>=<span id={styles.love}>"love"</span>
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
  );
}
