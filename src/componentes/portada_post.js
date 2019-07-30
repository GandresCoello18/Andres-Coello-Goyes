import React from "react";
import "./css/bootstrap.css";
import "./css/portada_post.css";
import Img from "./images/image_8.jpg";

class PortadaPost extends React.Component{
    render(){
        var estilo = {
            img_fondo:{
                backgroundImage: `url(${Img})`,
                backgroundRepeat: "cover",
                backgroundSize: "100% 250px"
            }
        }
        return(
            <div className="row justify-content-center">
                <div className="col-12 imagen-fondo-post" style={estilo.img_fondo}>
                    <div className="descripcion-post row justify-content-center">
                        <div className="col-10 col-sm-5">
                            <ul className="list-option-post mt-2">
                                <li>Inicio/</li>
                                <li>Articulos/</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <h2 className="text-center text-white">Por que es importante Linux?</h2>
                            <p className="text-center mt-5">De: <strong className="propietario">Andres Coello</strong> <span className="fecha-post">11-02-2019</span> <span className="comentario-post">C 5</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortadaPost;