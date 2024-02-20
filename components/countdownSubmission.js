"use client";

import { useEffect, useState } from "react";
import styles from "./countdown.module.css";

export default function CountdownSubmission() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const target = new Date("2/18/2024 16:30:00");

  function updateCounter() {
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    const d = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
    setDays(d);

    const h = Math.max(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      0
    );
    setHours(h);

    const m = Math.max(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      0
    );
    setMinutes(m);

    const s = Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0);
    setSeconds(s);
  }

  useEffect(() => {
    if (target.getTime() - new Date().getTime() <= 0) {
      return;
    }
    const interval = setInterval(updateCounter, 1000);
    updateCounter();
    return () => clearInterval(interval);
  }, []);

  if (target.getTime() - new Date().getTime() <= 0) {
    return null;
  }

  const daysLabel = days === 1 ? "day" : "days";
  const hoursLabel = hours === 1 ? "hour" : "hours";
  const minutesLabel = minutes === 1 ? "minute" : "minutes";
  const secondsLabel = seconds === 1 ? "second" : "seconds";

  return (
    <>
      <TitleBody title="Submit Your Project">
        <p>
          <a href="https://jumbohack-2024.devpost.com/" target="_blank">
            Click here to submit your project!
          </a>
        </p>
      </TitleBody>
      <div className={styles.timerWrapper}>
        <img src="/hourglass.gif" className={styles.graphic} />
        <div className={styles.countdown}>
          <div className={styles.counter}>
            <div className={styles.Number}>{days}</div>
            <div className={styles.Text}>{daysLabel}</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.Number}>{hours}</div>
            <div className={styles.Text}>{hoursLabel}</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.Number}>{minutes}</div>
            <div className={styles.Text}>{minutesLabel}</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.Number}>{seconds}</div>
            <div className={styles.Text}>{secondsLabel}</div>
          </div>
        </div>
      </div>
    </>
  );
}
