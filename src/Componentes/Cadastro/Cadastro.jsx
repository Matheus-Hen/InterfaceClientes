import React from 'react'


const Cadastro = ({Title, Class}) => {
    return (
        <div className={`${Class} h-[55px] border-solid border-t-2 border-r-2 border-l-2 border-black `}>
            <h1 className="text-center text-xl font-bold">Cadastro</h1>
            <h4 className="text-center text-xl font-bold">{Title}</h4>
        </div>
    )
}

export default Cadastro