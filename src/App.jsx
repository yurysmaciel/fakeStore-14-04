import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InicioPage from './Pages/Inicio'
import LoginPage from './Pages/Login'
import CadastroPage from './Pages/Cadastro'
import MeusAnunciosPage from './Pages/MeusAnunciosPage'
import DetalheAnuncioPage from './Pages/detalheAnuncio'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/MeusAnuncios" element={<MeusAnunciosPage />} />
      <Route path="/:slugId" element={<DetalheAnuncioPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App