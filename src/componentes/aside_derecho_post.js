import React from "react";
import "./css/bootstrap.css";
import "./css/aside_post.css";
import { Link } from 'react-router-dom';
import Datos from './json/articulos.json';
import Portada from "./images/image_9.jpg";
import Categoria from "./sub_componentes/categorias";

class aside_derecho_post extends React.Component{
    state = {
        data:[]
    }

    componentDidMount(){
        var obtener_ultimos_articulos = Datos.articulos.length - 4;
        var ultimos_tres = [];
        for(var i=1; i<4; i++){
            ultimos_tres[i-1] = Datos.articulos[obtener_ultimos_articulos+i];
            //console.log(ultimos_tres);
        }
        this.setState({
            data: ultimos_tres
        })  
    }

    render(){
        return(
            <di className="row">
                <div className="col-12 mt-3">
                    <input type="search" className="form-control" placeholder="Buscar Aqui..."/>
                </div>
                <div className="col-12 mt-5">
                    <Categoria color="#000" text="#000"/>
                </div>
                <div className="col-12 mt-5">
                    <h5 className="p-2">Post Populares</h5>
                    <ul className="nav flex-column popular_post">
                    {this.state.data.map(valor => (
                        <li className="p-2" key={valor.id_articulo}>
                            <Link to={"/articulos/"+valor.enlace}>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={valor.imagen} />
                                    </div>
                                    <div className="col-8">
                                        <p className="p-0">{valor.titulo}</p>
                                        <p className="p-0">{valor.categoria}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </di>
        );
    }
}

export default aside_derecho_post;