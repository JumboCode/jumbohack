import styles from "./page.module.css";
import Countdown from "@/components/countdown";
import Navbar from "@/components/Navbar";
import TitleBody from "@/components/TitleBody";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import Background from "@/components/Background";
import { HTMLTags } from "@/components/Decor";
import Judge404 from "@/components/Judge404";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Background />
      <main className={styles.main}>
        <div id="home" /* For #home url fragment */ />
        <Navbar />
        <div className={styles.contentPadding}>
          <Title />
          <Subtitle />
          <TitleBody>
            <p>
              The first hackathon at Tufts in the last 5 years, complete with
              food, workshops, and cultural events. Attendance is capped at 500
              people, so register now to save your spot :)
            </p>
            <p>
              <i>open to all college students in the Greater Boston area</i>
            </p>
          </TitleBody>
          <TitleBody title="Sponsors" titleId="sponsors">
            <p>
              JumboHack 2024 is powered by the generous support of our sponsors.
              If you're interested in joining us, email us at
              sponsor@jumbohack.org! We'd love to hear from you.
            </p>
          </TitleBody>
          <Sponsors />
          <Countdown />
          <TitleBody
            title="A Hackathon made with love..."
            titleId="about"
            imagepath="/love-letter.png"
            imagewidth={200}
            imageheight={200}
          >
            <h2>Dearest student hacker,</h2>
            <p>
              We've got something to tell you. We like you. Like, like-like you.
              So we organized a lil' something (for you):
            </p>
            <p>
              JumboHack - we're not like other hackathons, we're ~chill~. Come
              build something cool, meet some new people, or learn about
              something you'd never heard of before. Show off your skills,
              whether that's coding, designing, or project management - whatever
              you're good at, you sound like our type.
            </p>
            <p>
              We'll be in the{" "}
              <b>
                Joyce Cummings Center (@ Tufts University) on February
                17th/18th, 2024
              </b>{" "}
              - can't wait to see you there ;)
            </p>
            <p>
              With love,
              <br />
              The JumboHack Team
            </p>
          </TitleBody>
          <TitleBody title="Project Tracks" titleId="tracks">
            <p>
              We've got a few project tracks to guide your ideas and help make
              something awesome. Ace that hack!
            </p>
            <h2>Racial Justice Advocacy</h2>
            <p>
              This track is for projects that aim to promote racial equity and
              combat racism in various domains such as health, education,
              criminal justice, and media. You can use data analysis, machine
              learning, web development, or any other tools to create solutions
              that address the challenges and opportunities of racial justice
              advocacy.
            </p>
            <h2>Environmentalism</h2>
            <p>
              This track is for projects that aim to protect the environment and
              mitigate the effects of climate change. You can use sensors, IoT,
              blockchain, or any other tools to create solutions that monitor,
              reduce, or offset the environmental impact of human activities.
            </p>
            <h2>Education</h2>
            <p>
              This track is for projects that aim to improve the quality and
              accessibility of education for learners of all ages and
              backgrounds. You can use gamification, VR/AR, AI, or any other
              tools to create solutions that enhance the learning experience,
              outcomes, and opportunities of education.
            </p>
            <h2>Political Awareness</h2>
            <p>
              This track is for projects that aim to increase the political
              awareness and engagement of citizens and communities. You can use
              social media, data visualization, NLP, or any other tools to
              create solutions that inform, persuade, or mobilize people on
              political issues and causes.
            </p>
            <h2>General</h2>
            <p>
              This track is for projects that do not fit into any of the above
              categories, but still have a positive social impact. You can use
              any tools or technologies to create solutions that address any
              problem or need that you are passionate about. Here's a little
              inspo: food insecurity, youth/homeless/elderly advocacy, LGBT
              advocacy, accessibility, connecting with community.
            </p>
          </TitleBody>
          <TitleBody title="Judges" titleId="judges" />
          <Judge404 />
          <TitleBody title="Logistics" titleId="logistics">
            <p>
              "We're planning on hosting a bunch of events alongside the work
              you do on your project. We'll be working with other clubs on
              campus to host workshops, cultural events, and have some food to
              keep you hacking. Check back later for more info!
            </p>
            <h2>Food</h2>
            <p>
              "What's a date without some (free) food? We'll have lunch and
              dinner on Saturday and lunch on Sunday
            </p>
            <h2>Travel</h2>
            <p>
              "How to spot a baddie 101: they use public transportation. We're
              right next to the Medford/Tufts stop on the Green Line, and a 20
              minute walk from Davis on the Red Line
            </p>
            <h2>Sleeping</h2>
            <p>
              "No sleeping over on the first date - we'll be shutting down at 10
              on Saturday so you can get your beauty sleep
            </p>
            <h2>Schedule</h2>
            <p>
              "10AM-10PM on Saturday and 10AM-7PM on Sunday. More details to
              come :))
            </p>
          </TitleBody>
          <HTMLTags />
        </div>
      </main>
    </>
  );
}
