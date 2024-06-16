import React from "react";
import styles from "./styles.module.scss";
import { verbsList } from "@/app/datas/verbsDatas";
import FormSearch from "../form";

const TableInfo = () => {
  return (
    <div className={styles.containerTable}>
      <FormSearch />
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
              <td>{verb.pastSimple}</td>
              <td>{verb.pastParticipe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
