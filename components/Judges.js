"use client";

import styles from "./Judges.module.css";
import { useState } from "react";
import JudgeCard from "./JudgeCard";

export default function Judges() {
  const judgeStacks = [
    {
      trackName: "Racial Justice Advocacy",
      judges: [
        // Unassigned alums
        <JudgeCard name="Ben London" description="JumboCode Alum" />,
        <JudgeCard name="Denzel Oduro" description="JumboCode Alum" />,
        <JudgeCard name="Becca Miller" description="JumboCode Alum" />,
        <JudgeCard name="Jackson Parsells" description="JumboCode Alum" />,
        <JudgeCard name="Vicky Zhang" description="JumboCode Alum" />,
        // Unassigned professors
        <JudgeCard name="Dave Lillethun" description="Tufts CS Professor" />,
        <JudgeCard name="Megan Monroe" description="Tufts CS Professor" />,
        <JudgeCard name="Karen Edwards" description="Tufts CS Professor" />,
        <JudgeCard name="Milod Kazerounian" description="Tufts CS Professor" />,
      ],
    },
    {
      trackName: "Environmentalism",
      judges: [],
    },
    {
      trackName: "Education",
      judges: [],
    },
    {
      trackName: "Political Awareness",
      judges: [],
    },
    {
      trackName: "General",
      judges: [],
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
