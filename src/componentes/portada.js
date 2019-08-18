import React from "react";
import { Link } from 'react-router-dom';
import "./css/bootstrap.css";
import "./css/portada.css";
import Fondo from "./images/bg_1.jpg";
import Author from "./images/author.jpg";

class Portada extends React.Component{
    render(){
        var estile = {
            image_fondo: {
                backgroundImage: `url(${Fondo})`
            },
            color_claro:{
                color: '#fff'
            },
            image_autor:{
                backgroundImage: 'url(images/author.jpg)'
            }
        }
        return(
                <div className="row justify-content-center">
                <div className="imagen_fondo" style={estile.image_fondo}></div>    
                    <div className="sobreado_blanco"></div>
                    <div className="col-5 col-md-2">
                        <figure>
                            <img src={Author} />
                        </figure>
                    </div>
                    <div className="col-12 mb-5">
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-lg-7">
                                
                        <h2 className="text-center mb-2" style={estile.color_claro} >Desarrollador Web</h2>
					    <h1 className="text-center mb-4" style={estile.color_claro}>Andres Coello Goyes</h1>
					    <p className="text-center mb-4" style={estile.color_claro}>{this.props.contenido}</p>
					    <Link to="sobre-mi"><p className="text-center" style={estile.color_claro}>Mas Sobre Mi</p></Link>
                    
                            </div>
                        </div>
                    </div>    
                </div>
        );
    }
}

export default Portada;