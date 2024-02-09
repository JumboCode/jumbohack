import styles from "./Schedule.module.css";

export default function Schedule() {
  const makeRow = (time, event, location, eventNameStyle) => (
    <div className={styles.row}>
      <h3>
        <span className={styles.pink}>{time}</span>{" "}
        <span className={eventNameStyle}>{event}</span>
      </h3>
      {location && <p>{location}</p>}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.borderWide} />

      <div className={styles.content}>
        <div className={styles.borderDivider} />
        <div className={styles.schedule}>
          <h2>DAY 1: SATURDAY 02/17</h2>
          {makeRow("9:30AM-10AM", "Registration", "@JCC Lobby")}
          {makeRow(
            "10AM-11AM",
            "Welcome Ceremony",
            "@JCC Ballrooms (160, 170, 180)",
            styles.keynoteColor
          )}
          {makeRow("11AM-12PM", "CIVIC Talk", "@JCC 270", styles.talkColor)}
          {makeRow("11AM-12PM", "Team Formation", "@JCC 260")}
          {makeRow(
            "12PM-1:30PM",
            "Lunch",
            "@JCC 3rd and 4th Floors",
            styles.foodColor
          )}
          {makeRow(
            "1:30PM-2:30PM",
            "Figma Workshop",
            "@JCC 270",
            styles.workshopColor
          )}
          {makeRow(
            "2:30PM-3:30PM",
            "Terminal Survival Skills (TUGSLUG)",
            "@JCC 270",
            styles.workshopColor
          )}
          {makeRow("3PM-3:30PM", "Low-Keys")}
          {makeRow(
            "4PM-4:30PM",
            "Generative AI Talk (Lydia Yu)",
            "@JCC 270",
            styles.talkColor
          )}
          {makeRow("5PM", "BEATs")}
          {makeRow(
            "5:30PM-7PM",
            "Dinner",
            "@JCC 3rd and 4th Floors",
            styles.foodColor
          )}
          {makeRow(
            "7PM-8PM",
            "SQL Workshop (BSCS)",
            "@JCC 270",
            styles.workshopColor
          )}
          {makeRow(
            "10:30PM-11:30PM",
            "AI Workshop (AI Society)",
            "@JCC 270",
            styles.workshopColor
          )}
        </div>

        <div className={styles.borderDivider} />

        <div className={styles.schedule}>
          <h2>DAY 2: SUNDAY 02/18</h2>
          {makeRow("9:30AM-10AM", "Registration", "@JCC Lobby")}
          {makeRow(
            "10AM-11AM",
            "Git Workshop (Ben Borgers)",
            "@JCC 270",
            styles.workshopColor
          )}
          {makeRow(
            "11AM-12PM",
            "Malawi Education & Environment Talk (EWB)",
            "@JCC 270",
            styles.talkColor
          )}
          {makeRow(
            "12PM-1:30PM",
            "Lunch",
            "@JCC 3rd and 4th Floors",
            styles.foodColor
          )}
          {makeRow(
            "1:30PM-2PM",
            "What College Doesn't Teach You — Frontend (Becca Miller)",
            "@JCC 270",
            styles.talkColor
          )}
          {makeRow(
            "2PM-2:30PM",
            "Racial Justice Advocacy Talk (Kristin Austin)",
            "@JCC 270",
            styles.talkColor
          )}
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
        <div className={styles.borderDivider} />
      </div>

      <div className={styles.borderWide} />
    </div>
  );
}
