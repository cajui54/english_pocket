"use client";
import { Link, Button, Element, Events } from "react-scroll";
import React from "react";
import styles from "./styles.module.scss";
import { useMenuContext } from "@/app/context/contextMenu";
import { optionsMenu } from "@/app/config/menuConfig";
import { menuConfig } from "@/app/config/menuConfig";

const Navbar = () => {
  const { menu, setMenu } = useMenuContext();
  const handleCloseMenu = () => {
    if (menu.openMenu) {
      setMenu!(menuConfig.close);
    }
  };
  return (
    <nav className={`${styles.mainNavbar} ${menu.showOrHidden}`}>
      {optionsMenu.map((option, index) => {
        return (
          <Link {...option.scrollConfig} key={index} onClick={handleCloseMenu}>
            {option.title}
            <div></div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
