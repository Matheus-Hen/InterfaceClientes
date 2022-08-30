import React, { useContext, useEffect, useState } from 'react'
import Form from '../../../Componentes/Form/Form'
import Menu from '../../../Componentes/Menu/Menu'
import { DadosContext } from '../../../Context/DadosContext'
import Cadastro from '../../../Componentes/Cadastro/Cadastro'

const Dois = () => {
  const { contexto } = useContext(DadosContext)
  const [cep, setCep] = useState('')
  const [endereco1, setEndereco1] = useState('')
  const [endereco2, setEndereco2] = useState('')
  document.title = "Cadastro: Endereço"
  function handleClick() {
    contexto.setObj((prevState) => ({
      ...prevState,
      CEP : cep,
    Endereco1 : endereco1,
    Endereco2 : endereco2
  }))   
  }
  return (
      <div className='w-[1300px] pl-2 flex flex-col self-center items-center content-center'>
        <Cadastro Title="Endereço" Class="w-[400px]" />
        <Form Type1="text" Id1="CEP" Type2="Text" Id2="Endereco" Type3="text" Id3="Endereco"
          Event1={(e) => setCep(e.target.value)}
          Event2={(e) => setEndereco1(e.target.value)}
          Event3={(e) => setEndereco2(e.target.value)}
          Click={handleClick}
          Class="border-b-2 border-r-2 border-l-2 border-black 
                shadow-xl shadow-black h-[19rem]
                flex flex-col  w-[400px]"
          Button="Proximo"
          page="3" />
      </div>
  )
}

export default Dois