"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useContextIrregularVerbs } from "@/app/context/contextVerbs";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
const OutputForm = () => {
  const { irregularVerbs, setVerbs } = useContextIrregularVerbs();
  const handleClickClose = () => {
    setVerbs!(null);
  };
  return (
    <div className={styles.mainOutput}>
      <button onClick={handleClickClose}>
        <IoCloseCircleOutline />
      </button>
      {irregularVerbs && (
        <>
          <span>{irregularVerbs.infinitive}</span>
          <span>{irregularVerbs.pastSimple}</span>
          <span>{irregularVerbs.pastParticiple}</span>
        </>
      )}
    </div>
  );
};

export default OutputForm;
