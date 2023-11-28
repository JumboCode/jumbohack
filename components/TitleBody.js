import Image from "next/image";

import styles from "./TitleBody.module.css";

/* Props
 *   title: string
 *   body: array of strings, with each element being a separate paragraph
 *   imagepath: path to an image to be displayed alongisde the body
 */
export default function TitleBody({title, body, imagepath, imagewidth, imageheight}) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1> {/* not sure if newlining is consistent, should just add gap to css */}
            <div className={styles.row}>
                <div className={styles.body}>
                {body.map((paragraph, i) => (
                    <div key={i}>
                        <p>{paragraph}</p> {/* look at inserting newlines */}
                    </div>
                ))}
                </div>
                { imagepath ? 
                    <Image
                        src={imagepath}
                        alt="JumboHack Logo"
                        width={imagewidth}
                        height={imageheight}
                    /> : <></>
                }
            </div>
        </div>
    )
}