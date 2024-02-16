import styles from "./JudgeCard.module.css";

export default function JudgeCard({ name, description }) {
  return (
    <div className={styles.judgeCard}>
      <h3>{name}</h3>
      <p>
        <em>{description}</em>
      </p>
    </div>
  );
}
