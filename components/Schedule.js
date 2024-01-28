import styles from "./Schedule.module.css";

export default function Schedule() {
  const makeRow = (time, event, location, eventNameStyle) => (
    <div className={styles.row}>
      <h3>
        <span className={styles.pink}>{time}</span>{" "}
        <span className={eventNameStyle}>{event}</span>
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
            "Welcome Ceremony",
            "@JCC Ballrooms (160, 170, 180)",
            styles.keynoteColor
          )}
          {makeRow("11AM-12PM", "CIVIC Talk", "@JCC 270", styles.talkColor)}
          {makeRow("12PM-1:30PM", "Lunch", "@JCC TBD", styles.foodColor)}
          {makeRow(
            "1:30PM-2:30PM",
            "Figma Workshop (Product Studio)",
            "@JCC 270",
            styles.workshopColor
          )}
          {makeRow("4PM-4:30PM", "Lydia Yu Talk", "@JCC 270", styles.talkColor)}
          {makeRow("5PM", "BEATs", "@surprise ;)")}
          {makeRow("5:30PM-7PM", "Dinner", "@JCC TBD", styles.foodColor)}
          {makeRow(
            "7PM-8PM",
            "SQL Workshop (BSCS)",
            "@JCC 270",
            styles.workshopColor
          )}
        </div>

        <div className={styles.borderDivider} />

        <div className={styles.schedule}>
          <h2>DAY 2: SUNDAY 02/18</h2>
          {makeRow(
            "11AM-12PM",
            "Malawi Education & Environment Talk (EWB)",
            "@JCC 270",
            styles.talkColor
          )}
          {makeRow("12PM-1:30PM", "Lunch", "@JCC TBD", styles.foodColor)}
          {makeRow(
            "5PM-6PM",
            "Judging",
            "@JCC Ballrooms (160, 170, 180)",
            styles.keynoteColor
          )}
          {makeRow(
            "6PM-7PM",
            "Closing Ceremony",
            "@JCC Ballrooms (160, 170, 180)",
            styles.keynoteColor
          )}
        </div>
      </div>

      <div className={styles.borderTall} />
      <div className={styles.borderWide} />
    </div>
  );
}
