import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgStatue from "../../assets/images/libertyStatue.png";

const ArticleAbout = () => {
  return (
    <div className={styles.mainArticle} id="anchorAbout">
      <h2>Learn more about Irregular verbs</h2>

      <article>
        <section>
          <Image src={imgStatue} alt="statue liberty" />
          <h3>Understanding Irregular Verbs in English</h3>
          <p>
            Irregular verbs are a fundamental aspect of the English language,
            presenting unique challenges to learners and native speakers alike.
            Unlike regular verbs, which follow consistent and predictable
            patterns in their conjugation, irregular verbs deviate from these
            norms. This article explores the nature of irregular verbs, their
            significance, and provides insights into mastering them.
          </p>
        </section>
        <section>
          <h3>What Are Irregular Verbs?</h3>
          <p>
            Irregular verbs do not conform to the standard rules of conjugation.
            In English, regular verbs typically form their past simple and past
            participle forms by adding -ed to the base form (e.g., "talk"
            becomes "talked" and "talked"). In contrast, irregular verbs follow
            varied and often unpredictable patterns. For example, the verb "go"
            has the past simple form "went" and the past participle form "gone,"
            which do not adhere to the regular pattern.
          </p>
        </section>
        <h3>Importance of Irregular Verbs</h3>

        <ol>
          <li>
            <strong>Frequency of Use:</strong> Many of the most commonly used
            verbs in English are irregular. Verbs like "be," "have," "do," and
            "say" are essential for everyday communication and are all
            irregular.
          </li>
          <li>
            <strong>Historical Linguistic Roots:</strong>
            Irregular verbs often have deep historical roots. Their forms have
            been preserved over time, reflecting the language's evolution and
            the influence of other languages.
          </li>
          <li>
            <strong>Expressive Richness:</strong>
            Irregular verbs add to the expressive richness of English. They
            often provide nuanced meanings that are not always captured by
            regular verbs.
          </li>
        </ol>
        <section>
          <h3>Common Patterns in Irregular Verbs</h3>
          <p>
            While irregular verbs are characterized by their lack of conformity,
            some patterns can help learners recognize and remember them:
          </p>
          <ol>
            <li>
              <strong>
                Identical Base, Past Simple, and Past Participle Forms:
              </strong>
              Some verbs maintain the same form across different tenses.
              Examples include "put" (put, put, put) and "cut" (cut, cut, cut).
            </li>
            <li>
              <strong>Vowel Changes: </strong>
              Many irregular verbs exhibit vowel changes in their conjugation.
              For instance, "sing" changes to "sang" (past simple) and "sung"
              (past participle).
            </li>
            <li>
              <strong>Different Past Simple and Past Participle Forms:</strong>
              Different Past Simple and Past Participle Forms:
            </li>
          </ol>
        </section>
        <h3>Strategies for Mastering Irregular Verbs</h3>

        <ol>
          <li>
            <strong>Memorization:</strong>Since there are no consistent rules
            for conjugating irregular verbs, memorization is often necessary.
            Flashcards, lists, and regular practice can aid in this process.
          </li>
          <li>
            <strong>Contextual Learning:</strong>
            Learning irregular verbs in context helps with retention. Reading,
            listening, and engaging in conversations can reinforce understanding
            and correct usage.
          </li>
          <li>
            <strong>Grouping by Patterns:</strong>
            Grouping irregular verbs by their conjugation patterns can make them
            easier to learn. For example, grouping verbs that follow the same
            vowel change pattern (e.g., "sing," "ring," "swim") can be helpful.
          </li>
          <li>
            <strong>Regular Review:</strong>
            Regularly reviewing and practicing irregular verbs is crucial.
            Repetition helps solidify their forms in memory.
          </li>
        </ol>
        <section>
          <h3>Conclusion</h3>
          <p>
            Irregular verbs are an integral part of the English language,
            contributing to its complexity and richness. Mastering them requires
            dedication and practice, but understanding their patterns and
            significance can make the learning process more manageable. By
            regularly engaging with these verbs in context, learners can improve
            their fluency and confidence in using English.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ArticleAbout;
