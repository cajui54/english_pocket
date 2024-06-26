import { Dispatch, SetStateAction } from "react";

export interface IVerbs {
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
}
export interface IVerbsContext {
  irregularVerbs: IVerbs | null;
  setVerbs?: Dispatch<SetStateAction<IVerbs | null>>;
}
