import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dados } from "./sabores";

function Comentario() {

    const [sorvete, setSorvete] = useState({})

    const { id } = useParams()

    useEffect(() => {
        setSorvete(dados[id-1]);
    },[])

    const listaComentarios = sorvete.comentarios ? sorvete.comentarios.map(comentario => (
        <h1>{comentario.text}</h1>
    )) : <h1>Não ha comentarios</h1>;


    return(
        <>
        <h1>Comentarios do sabor: {sorvete.sabor}</h1>
        <div className="row mt-5">
        <div className="col-sm-6 d-flex flex-column">
            <img src={`../${sorvete.foto}`} alt={`${sorvete.sabor}`}
            width={400}
            height={300} />
        <Link className="d-flex align-self-start btn btn-danger mt-3" to={'/'} >Voltar</Link>
        </div>
        <div className="col-sm-6 d-flex flex-column">
            <div>Comentarios:</div>
            {listaComentarios}

        </div>
        </div>
        </>
    )
}

export default Comentario