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
        <div className="mb-5 border border-primary p-3 bg-primary rounded">
            <div className="d-flex justify-content-between">
                <div>
                    <img className="rounded-circle me-3" height={75} width={75} src={`../${comentario.perfil}`} />
                    <span className="h2 text-white">{comentario.nome}</span>
                </div>
                <div className="d-flex align-items-center me-5 h1 text-warning">
                    {comentario.avaliacao} 
                    <img className="ms-2" height={30} width={30} src="../star-fill.svg" alt="" />
                </div>
            </div>
            <div className="ms-5 text-white h3 ps-5">{comentario.text}</div>
        </div>
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
            <div style={{marginBottom:30}} className="text-success h3">Comentarios:</div>
            {listaComentarios}
        </div>
        </div>
        </>
    )
}

export default Comentario