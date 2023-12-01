import styles from "./page.module.css";
import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import TitleBody from "@/components/TitleBody";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";
import { HTMLTags } from "@/components/Decor";

export default function Home() {
  let letterbody = [
    "Dearest student hackers,",
    "JumboHack is not your average hackathon",
    "We've got a mission. We want to make hackathons truly fun and enjoyable. Hackathons are a way to show off your skills, whether that's coding, problem-solving, or project management. They're not just a way to build your resume.",
    "Join us on February 17, 2023 in the Joyce Cummings Center at Tufts University for a weekend of fun, hanging out with great people, and building something awesome. Let's hack love!",
    "With love,\nJumboHack Organization Team",
  ];

  return (
    <>
      <Background />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.contentPadding}>
          <Title />
          <Subtitle />
          <Countdown />
          <TitleBody
            title="A Hackathon made with love..."
            titleId="about"
            body={letterbody}
            imagepath="/love-letter.png"
            imagewidth={200}
            imageheight={200}
          />
          <TitleBody
            title="Project Tracks"
            titleId="tracks"
            body={[
              "We've got a few project tracks to guide your ideas and help you make something awesome",
            ]}
          />
          <HTMLTags />
        </div>
      </main>
    </>
  );
}
