"use client";
import typeStyles from "./title.module.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Title() {
  useEffect(() => {
    var app = document.getElementById("typed");

    var typewriter = new Typewriter(app, {
      loop: true,
    });

    const primaryWord = "Hack";
    const words = ["Code", "Love", "Make", "Give"];
    const prePause = 200;
    const postPause = 1500;

    typewriter
      .pauseFor(prePause)
      .typeString(primaryWord)
      .pauseFor(5000)
      .deleteChars(primaryWord.length);

    words.forEach((word) => {
      typewriter
        .pauseFor(prePause)
        .typeString(word)
        .pauseFor(postPause)
        .deleteChars(word.length);
    });
    typewriter.start();
  });

  return (
    <div className={typeStyles.heading}>
      <h1>
        Jumbo
        <span id="typed" className={typeStyles.typed} />
      </h1>
    </div>
  );
}
