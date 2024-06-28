import React from "react";
import styles from "./styles.module.scss";
import { verbsList } from "@/app/datas/verbsDatas";
import FormSearch from "../form";

const TableInfo = () => {
  return (
    <div className={styles.containerTable} id="anchorTable">
      <FormSearch />
      <div className={styles.imgContainer}>
        <div></div>
      </div>
      <table className={styles.table}>
        <caption>List of Verb Irregulars</caption>
        <thead>
          <tr>
            <th>Infinitive</th>
            <th>Past Simple</th>
            <th>Past Participe</th>
          </tr>
        </thead>

        <tbody>
          {verbsList.map((verb, index) => (
            <tr key={index}>
              <td>{verb.infinitive}</td>
              <td>
                {verb.pastSimple.split("/").length === 2 ? (
                  <>
                    <p>{verb.pastSimple.split("/")[0]}</p>
                    <p>{verb.pastSimple.split("/")[1]}</p>
                  </>
                ) : (
                  <p>{verb.pastSimple.split("/")[0]}</p>
                )}
              </td>
              <td>
                {verb.pastParticiple.split("/").length === 2 ? (
                  <>
                    <p>{verb.pastParticiple.split("/")[0]}</p>
                    <p>{verb.pastParticiple.split("/")[1]}</p>
                  </>
                ) : (
                  <p>{verb.pastParticiple.split("/")[0]}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
