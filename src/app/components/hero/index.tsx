import React from "react";
import styles from "./styles.module.scss";
import { LiaFlagUsaSolid } from "react-icons/lia";
const Hero = () => {
  return (
    <div className={styles.mainHero}>
      <div className={styles.bannerImage}></div>
      <div className={styles.containerTitles}>
        <LiaFlagUsaSolid />
        <div>
          <h3>Irregular</h3>
          <h1>verbs</h1>
        </div>
      </div>
      <article className={styles.containerArticle}>
        <p>
          English, like many languages, contains a mix of regular and irregular
          verbs. Regular verbs follow a consistent pattern when conjugated into
          different tenses. Irregular verbs, however, deviate from these
          patterns, often requiring special memorization and practice.
        </p>
      </article>
    </div>
  );
};

export default Hero;
