import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InicioPage from './Pages/Inicio'
import LoginPage from './Pages/Login'
import CadastroPage from './Pages/Cadastro'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App