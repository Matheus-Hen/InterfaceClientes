import React, { useContext } from 'react'
import { DadosContext } from '../../Context/DadosContext'
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io'

const Tbody = () => {
    const { contexto } = useContext(DadosContext)
    contexto.dados.push(contexto.obj)
  return (
    <tbody>   { contexto.dados.map((dados, index) => {
        return <tr key={index}>
          <td onClick={() => {
            document.getElementById(`Dados${index}`).style.display == 'none' ? document.getElementById(`Dados${index}`).style.display = 'block' : document.getElementById(`Dados${index}`).style.display = 'none'
            document.getElementById(`ArrowUp${index}`).style.display == 'none' ? document.getElementById(`ArrowUp${index}`).style.display = 'block' : document.getElementById(`ArrowUp${index}`).style.display = 'none'
            document.getElementById(`ArrowDown${index}`).style.display == 'block' ? document.getElementById(`ArrowDown${index}`).style.display = 'none' : document.getElementById(`ArrowDown${index}`).style.display = 'block'
          }
          }
            className='border border-slate-600 flex flex-col cursor-pointer' >
            <div className='flex flex-row items-center justify-center  '>
              {dados.Nome}  <IoIosArrowDropdownCircle id={`ArrowDown${index}`} className='block' /> <IoIosArrowDropupCircle id={`ArrowUp${index}`} className='hidden' />
            </div>
            <div id={`Dados${index}`} className="hidden text-center cursor-default">
              <div >
                <h3 className="font-bold">Dados Pessoais</h3>
                <div className='grid grid-col-1 gap-4'>
                  <h5 className='cursor-text '> Sobrenome: {dados.Sobrenome} </h5>
                  <h5 className='cursor-text '> Email: {dados.Email} </h5>
                  <h5 className='cursor-text'>Telefone: {dados.Telefone} </h5>
                </div>
              </div>
              <div >
                <h3 className="font-bold">Endereço</h3>
                <div className='grid grid-col-1 gap-4'>
                  <h5 className='cursor-text '> CEP: {dados.CEP} </h5>
                  <h5 className='cursor-text '> Endereco 1: {dados.Endereco1} </h5>
                  <h5 className='cursor-text'>Endereco 2: {dados.Endereco2} </h5>
                </div>
              </div>
              <div >
                <h3 className="font-bold">Dados adicionais</h3>
                <div className='grid grid-col-1 gap-4'>
                  <h5 className='cursor-text '> CPF: {dados.CPF} </h5>
                  <h5 className='cursor-text '> Data de Nascimento: {dados.DataNasc} </h5>
                  <h5 className='cursor-text'>Renda Mensal: {dados.RendaMensal} </h5>
                </div>
              </div>
            </div>
          </td>
        </tr>
      })}
      </tbody>

  )
}

export default Tbody