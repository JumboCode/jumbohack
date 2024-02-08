"use client";

import Image from "next/image";
import styles from "./Judges.module.css";
import { useState } from "react";

export default function Judges() {
  const judgeStacks = [
    {
      trackName: "Racial Justice Advocacy",
      judges: ["/love-letter.png", "/love-letter.png", "/love-letter.png"],
    },
    {
      trackName: "Environmentalism",
      judges: ["/love-letter.png", "/love-letter.png", "/love-letter.png"],
    },
    {
      trackName: "Education",
      judges: ["/love-letter.png", "/love-letter.png", "/love-letter.png"],
    },
    {
      trackName: "Political Awareness",
      judges: ["/love-letter.png", "/love-letter.png", "/love-letter.png"],
    },
    {
      trackName: "General",
      judges: ["/love-letter.png", "/love-letter.png", "/love-letter.png"],
    },
  ];
  const [stackStates, setStackStates] = useState(judgeStacks.map(() => false));

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {judgeStacks.map((stack, i) => (
          <div
            className={styles.column}
            onClick={() => {
              setStackStates((stackStates) => {
                const newStackStates = [...stackStates];
                newStackStates[i] = !newStackStates[i];
                return newStackStates;
              });
            }}
            key={i}
          >
            <h2>{stack.trackName}</h2>
            <div
              className={
                stackStates[i] ? styles.judgeStack : styles.judgeStackCompressed
              }
            >
              {stack.judges.map((image, i) => (
                <div className={styles.judgeCard} key={i}>
                  <Image src={image} width={256} height={256} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.moreArrow}>&rarr;</div>
    </div>
  );
}
