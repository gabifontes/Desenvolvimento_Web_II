import { createContext, useState } from "react";
import { LetterCtxProps } from "../types/index";
 
const LetterCtx = createContext<LetterCtxProps>({} as LetterCtxProps); // o as diz que o objeto é do tipo LetterCtxProps, ou seja, tem as propriedades input e setInput (que está dentro do index)
 
function LetterProvider({ children }: Props) {
  const [input, setInput] = useState("");
 
  return<LetterCtx.Provider value={{ input, setInput }}>
    {children}
  </LetterCtx.Provider>;
}
 
interface Props {
  children: React.ReactNode;
}

export { LetterCtx, LetterProvider }; // é um objeto que contém o contexto e o provider, json
export default LetterProvider; // é um componente que fornece o contexto para os filhos