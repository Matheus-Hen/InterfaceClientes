import Tbody from "../Componentes/Tbody/Tbody"
import React from 'react'

const Clientes = () => {

  document.title = "Clientes"

  // function handlerClickStyle(index){

  // }
  return (
    <div className='w-[1300px] pl-2 flex flex-col self-center items-center content-center'>
      <table className='table-auto border-separate border border-slate-500 w-[600px]'>
        <thead>
          <tr>
            <th>Clientes</th>
          </tr>
        </thead>
        <Tbody />
      </table>
    </div>
  )
}

export default Clientes