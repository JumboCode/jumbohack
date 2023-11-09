"use client";

import { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from 'next/image'
import heart from "../images/heart.webp"


export default function Countdown(props) {

  return ( 
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.top}>
          <div className={styles.topNumber}>
            <h1 className={styles.topNumberText}>{props.cardNum}</h1>
          </div>
          <div className={styles.title}>
            <p>{props.title}</p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            <Image
              className = {styles.leftImg}
              src = {heart}
              width = {30}
              height = {30}
            />
          </div>
          <div className={styles.middleMiddle}>
            <p>{props.content}</p>
          </div>
          <div className={styles.right}>
          <Image
              className = {styles.rightImg}
              src = {heart}
              width = {30}
              height = {30}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.bottomNum}>{props.cardNum}</h1>
        </div>
      </div>
    </div>
  )

    // <div className={styles.cardWrapper}>
    //     <p>Sup Gamers!</p>
    //     <p>[{Card}]</p>
    // </div>
}
