import React, { useState } from 'react'
import { IoMdPersonAdd } from 'react-icons/io'
import { BsFillPeopleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div id='bg' className={`w-[50px] h-screen bg-white`}>
            <label htmlFor='check' className='bar'>
                <input className="check" id='check' onClick={(e) => {if(e.target.checked)  {
                    document.getElementById('Opc').style.display = 'block' 
                    document.getElementById('bg').style.backgroundColor = 'rgb(71 85 105)' 
                    document.getElementById('bg').style.width = '20rem'
                } 
                    else{
                        document.getElementById('Opc').style.display = 'none'
                        document.getElementById('bg').style.backgroundColor = '#fff'
                        document.getElementById('bg').style.width = '50px'
                }}}
                    type="checkbox" />
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </label>
            <div id='Opc' className='hidden'>
                <div className={`p-10 mt-3`}>
                    <Link to="/Cadastro/page=1" className='className="text-white flex items-center hover:text-red-600' >
                        Cadastro <IoMdPersonAdd />
                    </Link>
                </div>
                <div className="p-10">
                    <Link to="/Clientes" className='className="text-white flex items-center hover:text-red-600' >
                        Clientes <BsFillPeopleFill /> </Link>
                </div>

            </div>

        </div>
    )
}

export default Menu