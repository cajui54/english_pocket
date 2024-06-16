"use client";
import { useState, useRef, FormEvent } from "react";
import styles from "./styles.module.scss";
import { MdOutlineSearch } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IError } from "@/app/interface/Form";
import { defaultError } from "@/app/config/formConfig";
import { useContextIrregularVerbs } from "@/app/context/contextVerbs";
import OutputForm from "./output";
import { verbsList } from "@/app/datas/verbsDatas";

const FormSearch = () => {
  const { setVerbs, irregularVerbs } = useContextIrregularVerbs();
  const [error, setError] = useState<IError>(defaultError);
  const refInput = useRef<HTMLInputElement>(null);

  const findIrregularVerb = (input: string) => {
    const irregularVerb = verbsList.find((verb) => {
      if (
        verb.infinitive === input ||
        verb.pastSimple === input ||
        verb.pastParticipe === input
      ) {
        return verb;
      }
    });
    if (irregularVerb) {
      setVerbs!(irregularVerb);
    } else {
      setError({
        message: "The Irregular Verb has not been found!",
        status: true,
      });
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = refInput.current!.value;

    error.status && setError(defaultError);
    if (input.length > 1) {
      if (verbsList) {
        findIrregularVerb(input);
      } else {
        setError({
          message: "Occurent an error unexpected!",
          status: true,
        });
      }
    } else if (input.length === 1) {
      setError({
        message: "Field must to contain at least 2 characters!",
        status: true,
      });
    } else {
      setError({
        message: "Field is required",
        status: true,
      });
    }
  };
  return (
    <form className={styles.mainForm} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Search Irregular Verbs</legend>

        <div className={styles.containerInput}>
          <LiaFlagUsaSolid />
          <input
            type="text"
            placeholder="Write name of verbs..."
            ref={refInput}
          />
          <span style={{ color: error.status ? "#b91c1c" : "" }}>*</span>
          {error.status && <p>{error.message}</p>}
        </div>

        <button className="buttonForm">
          <MdOutlineSearch />
        </button>
      </fieldset>
      {irregularVerbs && <OutputForm />}
    </form>
  );
};

export default FormSearch;
