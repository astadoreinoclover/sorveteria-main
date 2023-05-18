import { useEffect, useState } from 'react';
import { dados } from './sabores.js';
import './tabela.css'
import { Link } from 'react-router-dom';
function Tabela() {
    const [saborL, setSaborL] = useState([]);

    const [selection, setSelection] = useState([]);

    const [total, setTotal] = useState (0);

    useEffect(()=> {
        setSaborL(dados)
    },[])

    function selections(sabor) {
        if(selection.length <3) {
            setSelection([...selection, sabor]);
            alert(`${sabor.sabor} adicionado ao carrinho!`);
            setTotal(total+sabor.valor)
        } else {
            alert("Limite de compra por cliente atingido.");
        }
    }

    function retirar(item) {
        alert(`Você retirou o sorvete de ${item.sabor}`)
        const novosSabores = selection.filter(sabor => sabor.sabor !== item.sabor);
        const diminuiu = selection.length - novosSabores.length;
        setSelection(novosSabores);
        setTotal(total-(item.valor)*diminuiu);
    }

    const lista = saborL.map(sabor => (
        <div class="card m-3 d-flex" style={{width:400}} key={sabor.id}>
            <img class="card-img-top" src={sabor.foto} alt="Card image" style={{width:400, height:300}}/>
            <div class="card-body align-content-end">
                <h2 class="card-title mb-2">{sabor.sabor}</h2>
                <h3 class="card-title">R$ {sabor.valor.toFixed(2)}</h3>
                <button className='btn btn-success' onClick={()=>selections(sabor)}>Comprar</button>
                <div>
                    <Link className='card-title btn btn-info mt-3' to={`/Comentarios/${sabor.id}`}>
                        Comentarios dos Clientes
                    </Link>
                </div>
            </div>
        </div>
    ))

    let progress;

    if(selection.length === 0) {
        progress = ( 
        <div className="progress">
        <div className="progress-bar zero">0%</div>
        </div>
        )
    } else if (selection.length === 1 ) {
        progress = ( 
            <div className="progress">
            <div className="progress-bar um">33%</div>
            </div>
        )
    } else if (selection.length === 2 ) {
        progress = ( 
            <div className="progress">
            <div className="progress-bar dois">66%</div>
            </div>
        )
    } else if (selection.length === 3 ) {
        progress = ( 
            <div className="progress">
            <div className="progress-bar tres">100%</div>
            </div>
        )
    }

    const itens = selection.map(item => (
        <tr>
            <td>{item.sabor}</td>
            <td className='d-flex justify-content-between'>
                {item.valor.toFixed(2)}
                <button onClick={()=>retirar(item)} type="button" class="btn btn-danger">X</button>
            </td>
        </tr>
    ))
        
    return(
        <>
        {progress}
        <div className='d-flex flex-wrap'>
            {lista}
        </div>
        <div class="table-responsive-sm pb-5">          
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Sabor</th>
                        <th>Valor</th>
                    </tr>
                 </thead>
                 <tbody>
                    {itens}
                    <tr>
                        <td>Total:</td>
                        <td>{total.toFixed(2)}</td>
                    </tr>
                 </tbody>
            </table>
        </div>
        </>
    )
}

export default Tabela