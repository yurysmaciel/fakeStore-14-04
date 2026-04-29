import { useParams } from "react-router-dom"

export default function detalheAnuncioPage() {
    
    const { slugId } = useParams();


    return(
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Detalhes do anuncio : {slugId}</h1>
        </div>
    )
}