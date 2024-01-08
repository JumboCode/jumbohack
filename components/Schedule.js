import styles from "./Schedule.module.css";

export default function Schedule() {
  const makeRow = (time, event, location) => (
    <div className={styles.row}>
      <h3>
        <span>{time}</span> {event}
      </h3>
      <p>{location}</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.borderWide} />
      <div className={styles.borderTall} />

      <div className={styles.content}>
        <div className={styles.schedule}>
          <h2>DAY 1: SATURDAY 02/17</h2>
          {makeRow(
            "10AM-11AM",
            "WELCOME CEREMONY",
            "@JCC Ballrooms (160, 170, 180)"
          )}
          {makeRow("11AM-12PM", "HACK TIME", "@JCC Assigned Rooms")}
          {makeRow("12PM-1:30PM", "LUNCH (PROVIDED)", "@JCC Lobby")}
          {makeRow("1:30PM-6:30PM", "HACK TIME", "@JCC Assigned Rooms")}
          {makeRow("6:30PM-8PM", "DINNER (PROVIDED)", "@JCC Lobby")}
          {makeRow("8PM-10PM", "HACK TIME", "@JCC Assigned Rooms")}
        </div>

        <div className={styles.borderDivider} />

        <div className={styles.schedule}>
          <h2>DAY 2: SUNDAY 02/18</h2>
          {makeRow("10AM-12PM", "HACK TIME", "@JCC Assigned Rooms")}
          {makeRow("12PM-1:30PM", "LUNCH (PROVIDED)", "@JCC Lobby")}
          {makeRow("1:30PM-6PM", "HACK TIME", "@JCC Assigned Rooms")}
          {makeRow(
            "6PM-7PM",
            "Send off Ceremony",
            "@JCC Ballrooms (160, 170, 180)"
          )}
        </div>
      </div>

      <div className={styles.borderTall} />
      <div className={styles.borderWide} />
    </div>
  );
}
