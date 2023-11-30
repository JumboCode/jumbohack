"use client";

import styles from "./page.module.css";
import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import TitleBody from "@/components/TitleBody";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";
import { useState } from "react";

export default function Home() {
  const [backgroundOffset, setBackgroundOffset] = useState(0);

  const doScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setBackgroundOffset(scrollTop);
  };

  let letterbody = [
    "Dearest student hackers,",
    "JumboHack is not your average hackathon",
    "We've got a mission. We want to make hackathons truly fun and enjoyable. Hackathons are a way to show off your skills, whether that's coding, problem-solving, or project management. They're not just a way to build your resume.",
    "Join us on February 13, 2023 in the Joyce Cummings Center at Tufts University for a weekend of fun, hanging out with great people, and building something awesome. Let's hack love!",
    "With love,\nJumboHack Organization Team",
  ];

  return (
    <main className={styles.main} onScroll={doScroll}>
      <Navbar />
      <div className={styles.contentPadding}>
        <Title />
        <Subtitle />
        <Countdown />
        <Background offset={backgroundOffset} />
        <Image
          src="/jumbohack_full.svg"
          alt="JumboHack Logo"
          width={400}
          height={96}
        />
        <p>Welcome to JumboHack, nerds</p>
        <TitleBody
          title="A Hackathon made with love..."
          body={letterbody}
          imagepath="/love-letter.png"
          imagewidth={200}
          imageheight={200}
        />
        <TitleBody
          title="Project Tracks"
          body={[
            "We've got a few project tracks to guide eyour ideas and help you make something awesome",
          ]}
        />
      </div>
    </main>
  );
}
