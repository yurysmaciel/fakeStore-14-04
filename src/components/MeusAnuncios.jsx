import { Link } from "react-router-dom";

export default function MeusAnuncios({ anuncios }) {
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
            {anuncios.map((item, idx) => (
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
