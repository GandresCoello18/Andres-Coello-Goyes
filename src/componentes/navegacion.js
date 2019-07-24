import React from "react";
import { Link } from 'react-router-dom';
import "./css/bootstrap.css";
//import "./css/style.css";
import "./css/navegacion.css";
import Fondo from "./images/wal.jpg";

class Nav extends React.Component{
    render(){
		var estilo = {
			img_fondo: {
				backgroundImage: `url(${Fondo})`
			}
		}
        return (
			<div>
				<div className="row justify-content-center fila_navegacion" style={estilo.img_fondo}>
					<div className="col-12">
					<Link to="/"><h1 className="text-center">Andres Coello.</h1></Link>
						<nav>
							<ul>
								<Link to="/"><li>Inicio</li></Link>
								<Link to="tutoriales"><li>Toturiales</li></Link>
								<Link to="articulos"><li>Articulos</li></Link>
								<Link to="experiencia"><li>Experiencias</li></Link>
								<Link to="sobre-mi"><li>Acerca De Mi</li></Link>
								<Link to="contacto"><li>Contacto</li></Link>
							</ul>	
						</nav>
						<ul>
							<li><a href="https://www.facebook.com/andres.coellogoyes" target="_blanck"><img src="https://image.flaticon.com/icons/svg/145/145802.svg" /></a></li>
							<li><a href="https://www.instagram.com/coellogoyes/?hl=es-la" target="_blanck"><img src="https://image.flaticon.com/icons/svg/174/174855.svg" /></a></li>
							<li><a href="https://www.youtube.com/channel/UCHWsGkCRqlNKnoxYkC_ZRxQ?view_as=subscriber" target="_blanck"><img src="https://image.flaticon.com/icons/svg/185/185983.svg" /></a></li>
						</ul>
					</div>
				</div>
			</div>	    
        );
    }
}

export default Nav;