import { createContext, useState } from "react";

export const DadosContext = createContext()

export function DadosContextProvider({ children }) {
    const [obj, setObj] = useState({
        Nome: '',
        Sobrenome: '',
        Email:'',
        Telefone: '',
        CEP: '',
        Endereco1: '',
        Endereco2: '',
        DataNasc: '',
        CPF: '',
        RendaMensal: ''
    })
    const [dados, setDados] = useState([])

    const contexto = {
        obj : obj,
        dados : dados,
        setDados : setDados,
        setObj : setObj
    }

    return (
        <DadosContext.Provider value={{contexto }} >
            {children}
        </DadosContext.Provider>
    )
}