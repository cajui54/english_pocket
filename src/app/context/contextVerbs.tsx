"use client";
import { createContext, useContext, useState } from "react";
import { IVerbs, IVerbsContext } from "../interface/Verbs";
import { PropsProvider } from "../interface/ReactProps";

export const VerbsContext = createContext<IVerbsContext>({
  irregularVerbs: null,
});

export const VerbsContextProvider = ({ children }: PropsProvider) => {
  const [irregularVerbs, setVerbs] = useState<IVerbs | null>(null);

  return (
    <VerbsContext.Provider value={{ irregularVerbs, setVerbs }}>
      {children}
    </VerbsContext.Provider>
  );
};

export const useContextIrregularVerbs = () => {
  return useContext(VerbsContext);
};
