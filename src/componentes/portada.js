import React from "react";
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
			    /*<div className="hero-wrap js-fullheight" style={estile.image_fondo} data-stellar-background-ratio="0.5">
				    <div className="overlay"></div>
				    <div className="js-fullheight d-flex justify-content-center align-items-center">
					    <div className="col-md-8 text text-center">
						    <div className="img mb-4" style={estile.image_autor}></div>
						    <div className="desc">
							    <h2 className="subheading" style={estile.color_oscuro} >Desarrollador de Software</h2>
							    <h1 className="mb-4">Andres Coello Goyes</h1>
							    <p className="mb-4" style={estile.color_oscuro} >Joven autodidacta, apasionado por el desarrollo de software y creacion de productos informaticos, enfocado en el desarrollo web y en constante aprendizaje sobre nuevas tecnologias.</p>
							    <p><a href="#" className="btn-custom" style={estile.color_oscuro}>Mas Sobre Mi<span className="ion-ios-arrow-forward"></span></a></p>
						    </div>
					    </div>
				    </div>
                </div>*/
                <div className="row justify-content-center imagen_fondo" style={estile.image_fondo}>
                    <div className="sobreado_blanco"></div>
                    <div className="col-5 col-md-2">
                        <figure>
                            <img src={Author} />
                        </figure>
                    </div>
                    <div className="col-12 mb-5">
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-lg-7">
                                
                        <h2 className="text-center mb-5" style={estile.color_claro} >Desarrollador de Software</h2>
					    <h1 className="text-center mb-4" style={estile.color_claro}>Andres Coello Goyes</h1>
					    <p className="text-center mb-4" style={estile.color_claro} >Joven autodidacta, apasionado por el desarrollo de software y creacion de productos informaticos, enfocado en el desarrollo web y en constante aprendizaje sobre nuevas tecnologias.</p>
					    <p className="text-center"><a href="#" className="btn-custom" style={estile.color_claro}>Mas Sobre Mi<span className="ion-ios-arrow-forward"></span></a></p>
                    
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Portada;