"use client";

import { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from 'next/image'
import heart from "../images/heart.webp"


export default function Countdown(props) {

  return ( 
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.topNumber}>
          <h1 className={styles.topNumberText}>{props.cardNum}</h1>
        </div>
        <div className={styles.topSuit}>
          <div className = {styles.topImg}>
          </div>
          {/* <Image
            className = {styles.topImg}
            src = {heart}
            width = {30}
            height = {30}
          /> */}
        </div>
        <div className={styles.middle}>
          <p className={styles.middleText}>{props.content}</p>
        </div>
        <div className={styles.bottomSuit}>
          <div className = {styles.bottomImg}>
          </div>
          {/* <Image
              className = {styles.bottomImg}
              src = {heart}
              width = {30}
              height = {30}
              /> */}
          </div>
        <div className={styles.bottomNumber}>
          <h1 className={styles.bottomNumberText}>{props.cardNum}</h1>
        </div>
      </div>
    </div>
  )

    // <div className={styles.cardWrapper}>
    //     <p>Sup Gamers!</p>
    //     <p>[{Card}]</p>
    // </div>

  //   <div className={styles.cardWrapper}>
  //   <div className={styles.topNumber}>
  //     <h1 className={styles.topNumberText}>{props.cardNum}</h1>
  //   </div>
  // </div>
  // <div className={styles.topSuit}>
  // <Image
  //       className = {styles.topImg}
  //       src = {heart}
  //       width = {30}
  //       height = {30}
  //     />
  // </div>
  //   <div className={styles.middleMiddle}>
  //     <p>{props.content}</p>
  //   </div>
  //   <div className={styles.right}>
  //   <Image
  //       className = {styles.rightImg}
  //       src = {heart}
  //       width = {30}
  //       height = {30}
  //     />
  //   </div>
  // <div className={styles.bottom}>
  //   <h1 className={styles.bottomNum}>{props.cardNum}</h1>
  // </div>
}
