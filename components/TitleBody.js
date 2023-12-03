import Image from "next/image";

import styles from "./TitleBody.module.css";

/* Props
 *   title: string
 *   body: array of strings, with each element being a separate paragraph
 *   imagepath: path to an image to be displayed alongisde the body
 */
export default function TitleBody({
  title,
  titleId,
  body,
  subtitles,
  imagepath,
  imagewidth,
  imageheight,
}) {
  const bodyComponent = body && (
    <div className={styles.body}>
      {body.map((paragraph, i) => (
        <>
          {subtitles && subtitles[i] && (
            <h2 key={2 * i} className={styles.subtitle}>
              {subtitles[i]}
            </h2>
          )}
          <p key={2 * i + 1}>{paragraph}</p>
        </>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title} id={titleId}>
        {title}
      </h1>
      <div className={styles.row}>
        {bodyComponent}
        {imagepath && (
          <Image
            src={imagepath}
            alt="JumboHack Logo"
            width={imagewidth}
            height={imageheight}
          />
        )}
      </div>
    </div>
  );
}
