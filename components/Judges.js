"use client";

import styles from "./Judges.module.css";
import { useState } from "react";
import JudgeCard from "./JudgeCard";
import beccaCard from "@/images/becca.svg";
import benCard from "@/images/ben.svg";
import denzelCard from "@/images/denzel.svg";
import jacksonCard from "@/images/jackson.svg";
import vickyCard from "@/images/vicky.svg";
import daveCard from "@/images/dave.svg";
import meganCard from "@/images/megan.svg";
import karenCard from "@/images/karen.svg";
import milodCard from "@/images/milod.svg";

export default function Judges() {
  const judgeStacks = [
    {
      trackName: "Environmentalism",
      judges: [
        <JudgeCard image={benCard} />,
        <JudgeCard image={daveCard} />,
        <JudgeCard image={vickyCard} />,
        <JudgeCard image={milodCard} />,
      ],
    },
    {
      trackName: "Education",
      judges: [
        <JudgeCard image={jacksonCard} />,
        <JudgeCard image={karenCard} />,
      ],
    },
    {
      trackName: "Political Awareness & Racial Justice Advocacy",
      judges: [
        <JudgeCard image={benCard} />,
        <JudgeCard image={daveCard} />,
        <JudgeCard image={vickyCard} />,
        <JudgeCard image={milodCard} />,
      ],
    },
    {
      trackName: "General",
      judges: [
        <JudgeCard name="Denzel Oduro" image={denzelCard} />,
        <JudgeCard name="Becca Miller" image={beccaCard} />,
        <JudgeCard name="Megan Monroe" image={meganCard} />,
      ],
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
              {stack.judges.map((judge, i) => (
                <div className={styles.judgeCard} key={i}>
                  {judge}
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
