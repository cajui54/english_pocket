import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <footer className={styles.mainFooter} id="anchorFooter">
      <h6>More information:</h6>
      <div>
        <Link href="https://www.linkedin.com/in/jacksoncajui/" target="_blank">
          <FaLinkedin />
          Contact Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
