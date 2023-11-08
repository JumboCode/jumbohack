"use client";

import { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from 'next/image'


export default function Countdown(props) {

  return ( 
    <div>
      <h1>{props.card}</h1>
      <div className="cardWrapper">
        <div className="top">
        </div>
        <div className="bottom">
        </div>
      </div>
    </div>
  )

    // <div className={styles.cardWrapper}>
    //     <p>Sup Gamers!</p>
    //     <p>[{Card}]</p>
    // </div>
}
