import Logo from "./Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <div className={styles.navbarLinks}>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#schedule">Tracks</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#apply">Apply</a>

        {/* Hamburger icon,  */}
        <a href="#">&#9776;</a>
      </div>
    </div>
  );
}
