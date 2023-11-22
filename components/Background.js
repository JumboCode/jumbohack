"use client";
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

export default function Background({ offset }) {
  const backgroundText = BACKGROUND_TEXT.split("\n").map((line, i) => (
    <pre key={i} className={styles.backgroundLine}>
      {line}
    </pre>
  ));

  const translateStyle = {
    transform: `translateY(${-0.2 * offset}px)`,
  };

  return (
    <div className={styles.background} style={translateStyle}>
      {backgroundText}
    </div>
  );
}
