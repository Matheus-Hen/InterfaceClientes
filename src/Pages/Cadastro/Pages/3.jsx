import React, { useContext, useEffect, useState } from 'react'
import Form from '../../../Componentes/Form/Form'
import { DadosContext } from '../../../Context/DadosContext'
import Cadastro from '../../../Componentes/Cadastro/Cadastro'

const Tres = () => {
    const { contexto } = useContext(DadosContext)
    const [cpf, setCpf] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [rendaMensal, setRendaMensal] = useState('')
    document.title = "Cadastro: Dados adicionais"
    function handleClick() {
        contexto.setObj((prevState) => ({
            ...prevState,
            CPF : cpf,
            DataNasc : dataNasc,
            RendaMensal : rendaMensal
        }))
    }


    return (
            <div className='w-[1300px] pl-2 flex flex-col self-center items-center content-center'>
                <Cadastro Title="Dados adicionais" Class="w-[450px]" />
                <Form Type1="date" Id1="Data De Nascimento" Type2="Text" Id2="CPF" Type3="text" Id3="Renda Mensal"
                    Event1={(e) => setDataNasc(e.target.value)}
                    Event2={(e) => setCpf(e.target.value)}
                    Event3={(e) => setRendaMensal(e.target.value)}
                    Click={handleClick}
                    Class="border-b-2 border-r-2 border-l-2 border-black 
                shadow-xl shadow-black h-[19rem]
                flex flex-col  w-[450px]"
                    Button="Salvar"
                    page="Clientes" />
            </div>
    )
}

export default Tres