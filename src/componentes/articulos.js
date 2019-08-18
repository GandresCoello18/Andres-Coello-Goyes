import React from "react";
import { Link } from 'react-router-dom';
import Datos from './json/articulos.json';
import "./css/bootstrap.css";
import "./css/articulos.css";
//import "./css/style.css";

class Articulo extends React.Component{
	state = {
		data:[]
	}

	/*componentDidMount(){
		this.peticionPrincipal();
	}

	peticionPrincipal = async () => {
		try{	
			const respuesta = await fetch('https://cors-anywhere.herokuapp.com/https://backend-andres-coello-person.herokuapp.com/api/principal');
			//	res.header("Access-Control-Allow-Origin", "*");
			//	res.header('Access-Control-Allow-Methods', 'GET');
  			//	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			//});
			const data = await respuesta.json();
			console.log(data);
			const recibo = Object.values(data);
			const recibo_2 = recibo[0];
			this.setState({
				data: recibo_2
			})
		}catch(err){
			console.log("ocurrio un err "+ err);	
		}
		console.log( this.state.data );
	}*/

    render(){
        var estile = {
            imagen_portada:{
                backgroundImage: 'url(images/image_1.jpg)'
			},
            imagen_person:{
                backgroundImage: 'url(images/person_2.jpg)'
            } 
        }
        return(
				<div className="row justify-content-center ml-md-5">
					{Datos.articulos.map( valor => (
						<div className="col-12 col-sm-6 col-md-7 col-xl-4 area_articulo p-3" key={valor.id_articulo}>
							<div className="card" style={estile.ancho_articulo}>
								<img className="card-img-top" style={estile.alto_articulo} src={'./portada_articulos/'+valor.imagen} alt="Card image" />
								<div className="card-body">
									<h6 className="mt-3 p-2 categoria">{valor.categoria}</h6>
									<h4 className="card-title">{valor.titulo}</h4>
									<p className="card-text descripcion">{valor.descripcion}</p>
									
									<Link to={"/articulos/"+valor.enlace} className="continuar_leyendo ml-5">Continuar leyendo</Link>
								</div>
							</div>
						</div>
					))}	
				</div>
        	);
    }
}

export default Articulo;