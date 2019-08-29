import React from "react";
import { Link } from "react-router-dom";
import "./css/bootstrap.css";
import "./css/item_tuto.css";
import ProyectosTuto from "./json/proyectos.json";

class Item extends React.Component{
    render(){
        return(
            <div className="row ml-lg-5 mt-5 mt-lg-1 ">
                {ProyectosTuto.proyectos.map( (valor, key) => (
                    <div className="col-12 col-md-6 col-xl-4 mt-4 item_tuto p-3" key={valor.id_proyecto}>
                        <img  src={valor.imagen} />
                        <div className="fondo">
                            <h4 className="text-center p-2">{valor.titulo}</h4>
                        </div>
                        <div className="descripcion">
                            <p className="p-3">{valor.descripcion}</p>
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <a href={valor.enlace} className="text-center p-2 ml-2" target="_blanck">Visitar Aplicacion</a>
                                </div>
                                <div>
                                    <Link to={`/video/${key}`} className="text-center p-2 ml-2">¿Como esta echo?</Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                ))}
            </div>
        );
    }
}

export default Item;