import styles from "./Background.module.css";

const BACKGROUND_TEXT =
  "\
   01   00   \n\
  1001 0010  \n\
 00000 11011 \n\
 00011011110 \n\
 11101100110 \n\
 01010010000 \n\
  001111001  \n\
   0110111   \n\
    10111    \n\
     010     \n\
      1      \
";

const FILLER_LINES = [
  "There's something in the air - love? sweat? this is a joke, please shower before coming",
  "xoxo",
  "<3",
  "Are you a parallelized process? 'cause you look good in those threads",
  "Compiler? I barely know her!",
  "It's a small school, there's a good chance you run into your reg-ex",
  "console.log(“so… you come here often?”);",
  "You make me wanna come out of my shell :p",
  "If you were a 40 assignment, you'd be the bomb ;)",
  "My love for you is const",
  "try { shootYourShot(); } catch (error) { console.log(“haha jk… unless?”); }",
  "This you? bool beautiful = true;",
  "You: microservice // The guy she told you not to worry about: monolith",
  "“I'm not that hungry, I'll just nibble at whatever you get” // the nibble: 10 Petabytes",
];

export default function Background() {
  const heartText = BACKGROUND_TEXT.split("\n").map((line, i) => (
    <pre key={i} className={styles.backgroundLine}>
      {line}
    </pre>
  ));

  // Filler lines are shuffled. If this ever becomes a client component, we should shuffle in a useEffect hook so it doesn't re-shuffle on every render
  const fillText = FILLER_LINES.sort(() => Math.random() - 0.5).map(
    (line, i) => (
      <div key={i} className={styles.fillText}>
        {line}
      </div>
    )
  );

  return (
    <div className={styles.background}>
      <div className={styles.heart}>{heartText}</div>
      {fillText}
    </div>
  );
}
