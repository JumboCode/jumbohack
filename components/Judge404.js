import styles from "./Judge404.module.css";

export default function Judge404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.statusCode}>404</h1>
      <div>
        <h2 className={styles.statusMessage}>Judges not found.</h2>
        <p className={styles.subtext}>
          they'll be announced once we find 'em :)
        </p>
      </div>
    </div>
  );
}
