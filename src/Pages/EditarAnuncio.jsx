import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditarAnuncio() {
  const [formCadastro, setFormCadastro] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  const anuncios = [
    {
      id: 1,
      avatar: "https://img.olx.com.br/images/75/756620272081696.webp",
      name: "CBS Bros 160 0KM",
      title: "R$ 27.900",
      desc: "Moto 0KM a pronto entrega...",
    },
    {
      id: 2,
      avatar: "https://img.olx.com.br/images/69/690677496003681.webp",
      name: "Toyota Corolla",
      title: "R$ 107.900",
      desc: "Vendo corolla zerado",
    },
    {
      id: 3,
      avatar: "https://img.olx.com.br/images/87/874603603055067.webp",
      name: "Toyota Hilux SW4 SRV D4-d 4X4 3.0 TDI Dies. AUT 2011",
      title: "R$ 118.900",
      desc: "Vendo hilux sw4",
      slug: "Toyota-Hilux-SW4",
    },
    {
      id: 4,
      avatar: "https://img.olx.com.br/images/51/512618870200834.webp",
      name: "LANDER 2016/17",
      title: "R$ 16.500",
      desc: "Lander nova",
      slug: "Lander-2016",
    },
  ];

  const anuncioSelecionado = anuncios.find((item) => item.id === Number(id));

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormCadastro({
      ...formCadastro,
      [name]: value,
    });
  }

  function handleSubitCadastro(event) {
    event.preventDefault();

    console.log(formCadastro);
  }

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-5">
          {anuncioSelecionado ? (
            <>
              <img
                src={anuncioSelecionado.avatar}
                alt={anuncioSelecionado.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {anuncioSelecionado.name}
                </h2>

                <p className="text-lg font-semibold text-indigo-600">
                  {anuncioSelecionado.title}
                </p>

                <p className="text-gray-600 text-sm">
                  {anuncioSelecionado.desc}
                </p>
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
          <form onSubmit={handleSubitCadastro} className="space-y-5">
            <div>
              <label className="font-medium">Nome do item</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                name="preco"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="font-medium">URL da imagem</label>
              <input
                type="text"
                name="url"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="font-medium">Descrição</label>
              <input
                type="text"
                name="descricao"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={handleOnChange}
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
