import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InicioPage from "./Pages/Inicio";
import LoginPage from "./Pages/Login";
import CadastroPage from "./Pages/Cadastro";
import MeusAnunciosPage from "./Pages/MeusAnunciosPage";
import DetalheAnuncioPage from "./Pages/detalheAnuncio";
import EditarAnuncio from "./Pages/EditarAnuncio";
import { DataAnuncios } from "./data/DataAnuncios";

function App() {
  const [anuncios, setAnuncios] = useState(DataAnuncios);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route
            path="/MeusAnuncios"
            element={<MeusAnunciosPage anuncios={anuncios} />}
          />
          <Route
            path="/editar/:id"
            element={
              <EditarAnuncio anuncios={anuncios} setAnuncios={setAnuncios} />
            }
          />
          <Route path="/:slug/:id" element={<DetalheAnuncioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
