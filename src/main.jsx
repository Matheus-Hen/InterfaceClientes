import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DadosContextProvider } from './Context/DadosContext'
import './CSS/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(


  <DadosContextProvider>
    <App />
  </DadosContextProvider>


)
