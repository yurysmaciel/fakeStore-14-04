import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditarAnuncio({ anuncios, setAnuncios }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function EnviarDados(event) {
    event.preventDefault();

    const anunciosAtualizados = anuncios.map((item) => {
      if (item.id === Number(id)) {
        return {
          ...item,
          ...EditarAnuncio,
        };
      }

      return item;
    });

    setAnuncios(anunciosAtualizados);
    navigate("/MeusAnuncios");
  }

  const anuncioSelecionado = anuncios.find((item) => item.id === Number(id));

  const [EditarAnuncio, setEditarAnuncio] = useState({
    name: anuncioSelecionado?.name || "",
    title: anuncioSelecionado?.title || "",
    avatar: anuncioSelecionado?.avatar || "",
    desc: anuncioSelecionado?.desc || "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setEditarAnuncio((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-5">
          {EditarAnuncio ? (
            <>
              <img
                src={EditarAnuncio.avatar}
                alt={EditarAnuncio.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {EditarAnuncio.name}
                </h2>

                <p className="text-lg font-semibold text-indigo-600">
                  R${EditarAnuncio.title},00
                </p>

                <p className="text-gray-600 text-sm">{EditarAnuncio.desc}</p>
              </div>
            </>
          ) : (
            <p className="text-white">Anúncio não encontrado</p>
          )}
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="grid grid-cols-3 gap-x-3"></div>
          <form onSubmit={EnviarDados} className="space-y-5">
            <div>
              <label className="font-medium">Nome do item</label>
              <input
                type="text"
                name="name"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
                value={EditarAnuncio.name}
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                name="title"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
                value={EditarAnuncio.title}
              />
            </div>
            <div>
              <label className="font-medium">URL da imagem</label>
              <input
                type="text"
                name="avatar"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
                value={EditarAnuncio.avatar}
              />
            </div>
            <div>
              <label className="font-medium">Descrição</label>
              <input
                type="text"
                name="desc"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
                value={EditarAnuncio.desc}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Salvar alterações
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
