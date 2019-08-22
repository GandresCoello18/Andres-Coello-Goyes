import React from "react";
import { Link } from 'react-router-dom';
import "./css/bootstrap.css";
import Datos from './json/articulos.json';
import "./css/item_articulos.css";
import Portada from "./images/image_2.jpg";

class ItemArticulos extends React.Component{
    render(){
        return(
            <div className="row justify-content-end">
            {Datos.articulos.map( valor => (
                <div className="col-12 col-lg-10 mr-xl-5 p-5" key={valor.id_articulo}>
                    <div className="card">
                        <img className="card-img-top" src={valor.imagen} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">{valor.categoria}</h6>
                            <h4 className="card-text p-1">{valor.titulo}</h4>
                            <p className="p-1">{valor.descripcion}</p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                <Link to={"/articulos/"+valor.enlace} className="btn ml-1">Continuar Leyendo..</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
                <div className="col-11 p-5 mr-5 mr-md-0">
                    <div className="paginacion">
                        <ul>
                            <li>A</li>
                            <li className="active">1</li>
                            <li>N</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemArticulos;