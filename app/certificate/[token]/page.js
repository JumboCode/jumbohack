"use server";

import crypto from "crypto";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import AwardImage from "@/images/award_icon.png";
import LogoImage from "@/images/jumbohack-black.png";
import Image from "next/image";

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIGJAoGBALpEJRFwojUhIoWvQcGqqsBIushz2iW/3YG4crBYSlALnDi6oZqz6H42
+WL+UTJQXXcexeberZBk4vXmcqz1t+04CugJSaeV2cvELsfhKDNiFiAkoRcQdJHk
moUzdZn5h9as7WdObzU6OzsQaYGxh2ZHGBk8Jg4uCEpwjwxrsbnBAgMBAAE=
-----END RSA PUBLIC KEY-----
`;
// Takes an encrypted token from the URL and decrypts it using the public key above
// Tokens are expected to decrypt to a string in the format "jumbohack:{name}:{certificate title}"
// The name and certificate title are then displayed on the page
// Is this all secure? Who knows. Does it matter? Not really. Is this overkill for a simple certificate page? Absolutely.
export default async function Certificate(props) {
  const token = decodeURIComponent(props.params.token);
  // Try to decrypt the token. If it fails, the token is invalid
  let decrypted;
  try {
    decrypted = crypto
      .publicDecrypt(publicKey, Buffer.from(token, "base64"))
      .toString("utf8");
  } catch {
    return notFound();
  }
  const [type, name, track, criteria] = decrypted.split(":");

  if (type === "award winner") {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <Image className={styles.logo} src={LogoImage} width="100" />
          <div className={styles.title}>AWARD WINNER</div>
          <div className={styles.subtitle}>{track.toUpperCase()}</div>
          <div className={styles.description}>
            This Certificate is awarded to
          </div>
          <div className={styles.bigName}>{name}</div>
          <div className={styles.wideLine} />
          <div className={styles.description}>
            for achieving excellence in <span>{criteria.toLowerCase()}</span> in
            the {track} track during <span>JumboHack</span>, hosted by JumboCode
            of Tufts University on February 17-18, 2024
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>Lucas Maley</div>
              <div className={styles.signaturePosition}>
                President,
                <br />
                <span>JumboCode</span>
              </div>
            </div>
            <Image src={AwardImage} width="150" />
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>Tyler Thompson</div>
              <div className={styles.signaturePosition}>
                Vice President,
                <br />
                <span>JumboCode</span>
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>The JumboHack Team</div>
            </div>
          </div>
          <pre className={styles.rightDecor}>
            0<br />
            10
            <br />
            000
            <br />
            000
            <br />
            111
            <br />
            010
            <br />
            00
            <br />0
          </pre>
          <pre className={styles.leftDecor}>
            0<br />
            10
            <br />
            011
            <br />
            110
            <br />
            110
            <br />
            000
            <br />
            01
            <br />1
          </pre>
        </div>
        <div className={styles.footer} />
      </div>
    );
  }

  if (type === "certificate") {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <Image className={styles.logo} src={LogoImage} width="100" />
          <div className={styles.title}>CERTIFICATE</div>
          <div className={styles.subtitle}>OF PARTICIPATION</div>
          <div className={styles.description}>
            This Certificate is awarded to
          </div>
          <div className={styles.bigName}>{name}</div>
          <div className={styles.wideLine} />
          <div className={styles.description}>
            for participating in <span>JumboHack</span>, hosted by JumboCode of
            Tufts University on February 17-18, 2024
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>Lucas Maley</div>
              <div className={styles.signaturePosition}>
                President,
                <br />
                <span>JumboCode</span>
              </div>
            </div>
            <Image src={AwardImage} width="150" />
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>Tyler Thompson</div>
              <div className={styles.signaturePosition}>
                Vice President,
                <br />
                <span>JumboCode</span>
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.signature}>
              <div className={styles.wideLine} />
              <div className={styles.signatureName}>The JumboHack Team</div>
            </div>
          </div>
          <pre className={styles.rightDecor}>
            0<br />
            10
            <br />
            000
            <br />
            000
            <br />
            111
            <br />
            010
            <br />
            00
            <br />0
          </pre>
          <pre className={styles.leftDecor}>
            0<br />
            10
            <br />
            011
            <br />
            110
            <br />
            110
            <br />
            000
            <br />
            01
            <br />1
          </pre>
        </div>
        <div className={styles.footer} />
      </div>
    );
  }

  return notFound();
}
