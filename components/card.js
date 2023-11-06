"use client";

import { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from 'next/image'


export default function Countdown(Card) {

  return (
    <div className={styles.cardWrapper}>
        <p>Sup Gamers!</p>
        <p>[{Card}]</p>
    </div>
  )
}
