"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useMenuContext } from "@/app/context/contextMenu";
import { optionsMenu } from "@/app/config/menuConfig";
import { menuConfig } from "@/app/config/menuConfig";
import Link from "next/link";

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
          <Link href="/" key={index} onClick={handleCloseMenu}>
            {option.title}
            <div></div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
