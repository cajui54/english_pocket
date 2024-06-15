import React from "react";
import styles from "./styles.module.scss";
import { LiaFlagUsaSolid } from "react-icons/lia";
import Navbar from "./_components/navbar/navbar";
import ButtonMenu from "./_components/burgerMenu/buttonMenu";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.containerLogo}>
        <LiaFlagUsaSolid />
        <h1>
          <span>English</span>
          <span>of Pocket</span>
        </h1>
      </div>
      <Navbar />
      <ButtonMenu />
    </header>
  );
};

export default Header;
