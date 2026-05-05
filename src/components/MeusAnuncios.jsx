import { Link } from "react-router-dom";

export default function MeusAnuncios() {
  const team = [
    {
      id: 1,
      avatar: "https://img.olx.com.br/images/75/756620272081696.webp",
      name: "CBS Bros 160 0KM",
      title: "R$ 27.900",
      desc: "Moto 0KM a pronto entrega. Já emplacada e com IPVA 2026 pago e licenciamento também",
    },
    {
      id: 2,
      avatar:
        "https://tse1.mm.bing.net/th/id/OIP.p9GF5fLo7iW9W0NC3TWgswHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: "Toyota Corolla XEI 2.0 Flex 16V Aut. 2019",
      title: "R$ 107.900",
      desc: "Vendo corolla zerado",
    },
    {
      id: 3,
      avatar: "https://img.olx.com.br/images/87/874603603055067.webp",
      name: "Toyota Hilux SW4 SRV D4-d 4X4 3.0 TDI Dies. AUT 2011",
      title: "R$ 118.900",
      desc: "Vendo hilux sw4",
    },
    {
      id: 4,
      avatar: "https://img.olx.com.br/images/51/512618870200834.webp",
      name: "LANDER 2016/17",
      title: "R$ 16.500",
      desc: "Lander nova",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meus Anuncios
          </h3>
          <p className="text-gray-600 mt-3">
            Aqui voce encontra os seus anuncios
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li key={idx} className="gap-8 sm:flex">
                <div className="w-full h-60">
                  <img
                    src={item.avatar}
                    className="w-96 h-48 object-contain object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>

                  <Link
                    to={`/editar/${item.id}`}
                    className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Editar anúncio
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
