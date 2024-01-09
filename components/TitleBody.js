import Image from "next/image";

import styles from "./TitleBody.module.css";

/* Props
 *   title: string
 *   body: array of strings, with each element being a separate paragraph
 *   imagepath: path to an image to be displayed alongisde the body
 */
export default function TitleBody({
  children,
  title,
  titleId,
  imagepath,
  imagewidth,
  imageheight,
}) {
  return (
    <div className={styles.container} id={titleId}>
      {title && <h1>{title}</h1>}
      <div className={styles.content}>
        <div>{children}</div>
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
