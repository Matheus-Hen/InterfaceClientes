import React, { useContext, useEffect, useState } from 'react'
import Form from '../../../Componentes/Form/Form'
import { DadosContext } from '../../../Context/DadosContext'
import Cadastro from '../../../Componentes/Cadastro/Cadastro'
const Um = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const { contexto } = useContext(DadosContext)
    document.title = "Cadastro: Dados pessoais"
    function handleClick() {
        contexto.setObj((prevState) => ({
            ...prevState,
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Telefone: telefone
        }))
    }
    return (
        <div className='w-[1300px] pl-2 flex flex-col self-center items-center content-center'>
            <Cadastro Title="Dados pessoais" Class="w-[400px]" />
            <Form
                Type1="text" Id1="Nome" Event1={(e) => setNome(e.target.value)}
                Type2="Text" Id2="Sobrenome" Event2={(e) => setSobrenome(e.target.value)}
                Type3="email" Id3="Email" Event3={(e) => setEmail(e.target.value)}
                Type4="Text" Id4="Telefone" Event4={(e) => setTelefone(e.target.value)}
                Class="border-b-2 border-r-2 border-l-2 border-black 
                shadow-lg shadow-black h-[19rem]
                flex flex-col  w-[400px]"
                Button="Proximo"
                page="2"
                Click={handleClick}
            />
        </div>
    )
}

export default Um