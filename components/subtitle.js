import styles from "./subtitle.module.css";

export default function Subtitle() {
    return (
        <div className={styles.container}>
            <div className={styles.subtitleText}>
                <h3>February 13 2024</h3>
                <h3>#Love-a-Thon</h3>
            </div>
            <div className={styles.application}>
                <a href="https://forms.gle/Q2rVTUSmYRNWgq636" target="_blank"><button className={styles.apply}>Apply</button></a>
            </div>
            <div className={styles.htmlTags}> 
                &lt;html <span id={styles.lang}>lang</span>=<span id={styles.love}>"love"</span>&gt;
                <br></br>
                &lt;<span className={styles.tags}>h1</span>&gt;Hello, my-world!&lt;/<span className={styles.tags}>h1</span>&gt;
                <br></br>
                &lt;<span className={styles.tags}>p</span>&gt;Will you be my Hackentine?&lt;/<span className={styles.tags}>p</span>&gt;
                <br></br>
                &lt;/html&gt;
            </div>
        </div>
    )
}