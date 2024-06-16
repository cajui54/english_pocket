import React from "react";
import styles from "./style.module.scss";

const Paralax = ({ image }: { image: string }) => {
  return (
    <div className={`${image} ${styles.mainParalax} `}>
      <div></div>
    </div>
  );
};

export default Paralax;
