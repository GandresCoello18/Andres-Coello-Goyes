import React from "react";
import { Link } from 'react-router-dom';
import "./css/bootstrap.css";
import Datos from './json/articulos.json';
import "./css/item_articulos.css";
import Portada from "./images/image_2.jpg";

class ItemArticulos extends React.Component{
    state={
        siguiente: null,
        anterior: null,
        cinco: []
    }

    componentDidMount(){
        var trasformar_a_number = parseInt(this.props.llave);
        this.setState({
            siguiente: trasformar_a_number+1
        });
        this.setState({
            anterior: trasformar_a_number-1
        });

        var obtener_ultimos_articulos = Datos.articulos.length - (trasformar_a_number*5+1);
        var ultimos_cinco = [];

        if(trasformar_a_number <= 0){
            window.location.href="/articulos/"+(trasformar_a_number+1);
        }
        
        for(var i=1; i<6; i++){
            if(obtener_ultimos_articulos < 0){
                //break;
                window.location.href="/articulos/"+(trasformar_a_number-1);
            }else{
                ultimos_cinco[i-1] = Datos.articulos[obtener_ultimos_articulos+i];
            }
        }
        
        this.setState({
            cinco: ultimos_cinco
        });
    }

    render(){
        return(
            <div className="row justify-content-end">
            {this.state.cinco.map( valor => (
                <div className="col-12 col-lg-10 mr-xl-5 p-5" key={valor.id_articulo}>
                    <div className="card">
                        <img className="card-img-top" src={valor.imagen} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">{valor.categoria}</h6>
                            <h4 className="card-text p-1">{valor.titulo}</h4>
                            <p className="p-1">{valor.descripcion}</p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                <Link to={"/post/"+valor.enlace} className="btn ml-1">Continuar Leyendo..</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
                <div className="col-11 p-5 mr-5 mr-md-0">
                    <div className="paginacion">
                        <ul>
                            <a href={"/articulos/"+this.state.anterior}><li><div className="arrow-left icon"></div></li></a>
                            <li className="active">{this.props.llave}</li>
                            <a href={"/articulos/"+this.state.siguiente}><li><div className="arrow-right icon"></div></li></a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemArticulos;