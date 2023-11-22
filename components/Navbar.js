"use client";
import { useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNavMenu = () => setNavMenuOpen(!navMenuOpen);

  const links = (
    <>
      <a href="#about">About</a>
      <a href="#faq">FAQ</a>
      <a href="#schedule">Schedule</a>
      <a href="#tracks">Tracks</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#apply">Apply</a>
    </>
  );

  const hamburgerIcon = navMenuOpen ? <>&times;</> : <>&#9776;</>;

  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <div className={styles.navbarLinks}>{links}</div>
      <div className={styles.hamburger} onClick={toggleNavMenu}>
        {hamburgerIcon}
      </div>
      {navMenuOpen && (
        <div className={styles.navMenu} onClick={toggleNavMenu}>
          {links}
        </div>
      )}
    </div>
  );
}
