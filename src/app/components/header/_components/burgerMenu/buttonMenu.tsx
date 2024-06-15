"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useMenuContext } from "../../../../context/contextMenu";
import { menuConfig } from "../../../../config/menuConfig";

const ButtonMenu = () => {
  const { menu, setMenu } = useMenuContext();

  const handleOpenMenu = () => {
    if (!menu.openMenu) {
      setMenu!(menuConfig.open);
    } else {
      setMenu!(menuConfig.close);
    }
  };
  return (
    <div
      className={`${styles.containerButtonMenu} ${menu.classMenu}`}
      onClick={handleOpenMenu}
    >
      <div className={styles.burgerMenu__button}></div>
    </div>
  );
};

export default ButtonMenu;
