import React from "react";

class Portada extends React.Component{
    render(){
        var estile = {
            image_fondo: {
                backgroundImage: 'url(images/bg_1.jpg)'
            },
            color_oscuro:{
                color: '#000'
            },
            image_autor:{
                backgroundImage: 'url(images/author.jpg)'
            }
        }
        return(
			    <div className="hero-wrap js-fullheight" style={estile.image_fondo} data-stellar-background-ratio="0.5">
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
			    </div>
        );
    }
}

export default Portada;