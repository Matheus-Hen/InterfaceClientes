import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'


const Form = ({ Type1, Type2, Type3, Type4, Id1, Id2, Id3, Id4, Class, Button,page, Event1, Event2, Event3, Event4, Click  }) => {
    return (
        <div>
        <form className={Class}>
            <Input Type={Type1} Id={Id1} EventChange={Event1} />
            <Input Type={Type2} Id={Id2} EventChange={Event2} />
            <Input Type={Type3} Id={Id3} EventChange={Event3} />
            <Input Type={Type4} Id={Id4} EventChange={Event4} />
            {page != "Clientes" ? 
        <Link onClick={Click} className="text-center pt-5 text-blue-500 font-bold flex justify-center items-center" to={`/Cadastro/page=${page}`} >{Button}<BsFillArrowRightSquareFill /></Link>    :
        <Link onClick={Click} className="text-center pt-5 text-blue-500 font-bold flex justify-center items-center" to={`/${page}`} >{Button}<BsFillArrowRightSquareFill /></Link>
        }
            
        </form>
        
        </div>
    )
}

export default Form