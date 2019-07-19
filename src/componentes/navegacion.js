import React from "react";
import "./css/bootstrap.css";
//import "./css/style.css";
import "./css/navegacion.css";

class Nav extends React.Component{
    render(){
        return (
			<div>
				<div className="row justify-content-center fila_navegacion">
					<div className="col-12">
						<a href="#"><h1 className="text-center">Andres Coello.</h1></a>
						<nav>
							<ul>
								<li><a href="#">Inicio</a></li>
								<li><a href="#">Toturiales</a></li>
								<li><a href="#">Articulos</a></li>
								<li><a href="#">Experiencias</a></li>
								<li><a href="#">Acerca De Mi</a></li>
								<li><a href="#">Contacto</a></li>
							</ul>	
						</nav>
					</div>
				</div>
			</div>	    
        );
    }
}

export default Nav;