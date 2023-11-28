import styles from "./page.module.css";
import Image from "next/image";

import Example from "@/components/example";
import Navbar from "@/components/Navbar";
import TitleBody from "@/components/TitleBody";

export default function Home() {
  let letterbody = ["Dearest student hackers,", 
                    "JumboHack is not your average hackathon",
                    "We've got a mission. We want to make hackathons truly fun and enjoyable. Hackathons are a way to show off your skills, whether that's coding, problem-solving, or project management. They're not just a way to build your resume.",
                    "Join us on February 13, 2023 in the Joyce Cummings Center at Tufts University for a weekend of fun, hanging out with great people, and building something awesome. Let's hack love!",
                    "With love,\nJumboHack Organization Team"];

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.contentPadding}>
        <Image
          src="/jumbohack_full.svg"
          alt="JumboHack Logo"
          width={400}
          height={96}
        />
        <p>Welcome to JumboHack, nerds</p>
        <TitleBody title="A Hackathon made with love..." body={letterbody} imagepath="/love-letter.png" imagewidth={200} imageheight={200}/>
        <TitleBody title="Project Tracks" body={["We've got a few project tracks to guide eyour ideas and help you make something awesome"]}/>
        <Example />
      </div>
    </main>
  );
}
