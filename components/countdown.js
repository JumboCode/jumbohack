"use client";

import { useEffect, useState } from "react";
import styles from "./countdown.module.css";
import Image from 'next/image'
import hourglass from "../images/hourglass.jpg"


export default function Countdown() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2/17/2024 10:00:00");
    //const target = new Date("11/4/2023 15:14:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

//   function CountdownOrMessage({ isPartyTime }) {
//     if (isPartyTime) {
//       return <h1>HACKATHON TIME!!!!</h1>;
//     }
//     else {}
//   }
//<CountdownOrMessage isPartyTime={partyTime}/>

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timermage}>
        <Image 
        src={hourglass} 
        fill
        alt="Hourglass" 
        />
        <div>lol</div>
      </div>
      <div className={styles.countdown}>
        <div className={styles.daysSection}>
          <div className={styles.Number}>{days}</div>
          <div className={styles.Text}>days</div>
        </div>
        <div className={styles.hoursSection}>
          <div className={styles.Number}>{hours}</div>
          <div className={styles.Text}>hours</div>
        </div>
        <div className={styles.minutesSection}>
          <div className={styles.Number}>{minutes}</div>
          <div className={styles.Text}>minutes</div>
        </div>
        <div className={styles.secondsSection}>
          <div className={styles.Number}>{seconds}</div>
          <div className={styles.Text}>seconds</div>
        </div>
      </div>
    </div>
  )
}
