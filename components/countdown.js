"use client";

import { useEffect, useState } from "react";
import styles from "./countdown.module.css";

export default function Countdown() {
  const [partyTime, setPartyTime] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const target = new Date("2/17/2024 10:00:00");

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

    if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
      setPartyTime(true);
    } else {
      setPartyTime(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(updateCounter, 1000);
    updateCounter();
    return () => clearInterval(interval);
  }, []);

  if (partyTime) {
    return null;
  }

  return (
    <div className={styles.timerWrapper}>
      <img src="/hourglass.gif" className={styles.graphic} />
      <div className={styles.countdown}>
        <div className={styles.counter}>
          <div className={styles.Number}>{days}</div>
          <div className={styles.Text}>days</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.Number}>{hours}</div>
          <div className={styles.Text}>hours</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.Number}>{minutes}</div>
          <div className={styles.Text}>minutes</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.Number}>{seconds}</div>
          <div className={styles.Text}>seconds</div>
        </div>
      </div>
    </div>
  );
}
