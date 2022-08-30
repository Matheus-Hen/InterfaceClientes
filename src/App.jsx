import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from './Componentes/Menu/Menu'
import React from "react";
import Um from "./Pages/Cadastro/Pages/1";
import Dois from "./Pages/Cadastro/Pages/2";
import Clientes from "./Pages/Clientes"
import Tres from "./Pages/Cadastro/Pages/3";

function App() {


  return (
    <div className="flex flex-row">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="Cadastro/page=1" element={<Um />} />
          <Route path="Cadastro/page=2" element={<Dois />} />
          <Route path="Cadastro/page=3" element={<Tres />} />
          <Route path="Clientes" element={<Clientes />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
