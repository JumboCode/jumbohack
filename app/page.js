import styles from "./page.module.css";
import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import TitleBody from "@/components/TitleBody";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";
import { HTMLTags } from "@/components/Decor";
import Judge404 from "@/components/Judge404";

export default function Home() {
  const hookBody = [
    "The first hackathon at Tufts in the last 5 years, complete with food, workshops, and cultural events. Attendance is capped at 500 people, so register now to save your spot :)",
    "Open to all college students in the Greater Boston area!",
  ];
  const letterBody = [
    "Dearest student hacker,",
    "We've got something to tell you. We like you. Like, like-like you. So we organized a lil' something (for you):",
    "JumboHack - we're not like other hackathons, we're ~chill~. Come build something cool, meet some new people, or learn about something you'd never heard of before. Show off your skills, whether that's coding, designing, or project management - whatever you're good at, you sound like our type.",
    "We'll be in the Joyce Cummings Center (@ Tufts University) on February 17th/18th, 2024 - can't wait to see you there ;)",
    "With love,\nThe JumboHack Team",
  ];
  const trackBody = [
    "We've got a few project tracks to guide your ideas and help make something awesome. Ace that hack!",
  ];
  const judgingBody = [
    "404: Judges not found",
    "they'll be announced later once we find 'em :)",
  ];
  const logisticsSubtitles = [null, "Food", "Travel", "Sleeping", "Schedule"];
  const logisticsBody = [
    "We're planning on hosting a bunch of events alongside the work you do on your project. We'll be working with other clubs on campus to host workshops, cultural events, and have some food to keep you hacking. Check back later for more info!",
    "What's a date without some (free) food? We'll have lunch and dinner on Saturday and lunch on Sunday",
    "How to spot a baddie 101: they use public transportation. We're right next to the Medford/Tufts stop on the Green Line, and a 20 minute walk from Davis on the Red Line",
    "No sleeping over on the first date - we'll be shutting down at 10 on Saturday so you can get your beauty sleep",
    "10AM-10PM on Saturday and 10AM-7PM on Sunday. More details to come :))",
  ];

  return (
    <>
      <Background />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.contentPadding}>
          <Title />
          <Subtitle />
          <TitleBody body={hookBody} />
          <Countdown />
          <TitleBody
            title="A Hackathon made with love..."
            titleId="about"
            body={letterBody}
            imagepath="/love-letter.png"
            imagewidth={200}
            imageheight={200}
          />
          <TitleBody title="Project Tracks" titleId="tracks" body={trackBody} />
          <TitleBody title="Judges" titleId="judges" />
          <Judge404 />
          <TitleBody
            title="Logistics"
            titleId="logistics"
            subtitles={logisticsSubtitles}
            body={logisticsBody}
          />
          <HTMLTags />
        </div>
      </main>
    </>
  );
}
