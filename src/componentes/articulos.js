import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./css/bootstrap.css";
import "./css/articulos.css";
import Art_Portada from "./images/image_1.jpg";
import Art_Portada_2 from "./images/image_5.jpg";
import Art_Portada_3 from "./images/image_3.jpg";
//import "./css/style.css";

class Articulo extends React.Component{
	state = {
		data:{
			data:[]
		}
	}

	componentDidMount(){
		this.peticionPrincipal();
	}

	peticionPrincipal = async () => {
			await fetch('https://backend-andres-coello-person.herokuapp.com/api/principal')
			.then(function (response) {
				const data = response.json();
				console.log(data);
				this.setState({
					data: data
				})
			}).catch(function(err){
				console.log(err);
			})
		
		console.log(this.state.data);
	}

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
				<div className="col-12 col-sm-6 col-md-7 col-xl-4 area_articulo p-3">
					<div className="card" style={estile.ancho_articulo}>
						<img className="card-img-top" style={estile.alto_articulo} src={Art_Portada} alt="Card image" />
						<div className="card-body">
							<h6 className="mt-3 p-2 categoria">Desarrollo Web</h6>
							<h4 className="card-title">Curva de aprendizaje de React VS Angular</h4>
							<p className="card-text descripcion">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
							<div className="row justify-content-center reacciones">
								<div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
							</div>
							<Link to="/articulos/la-importancia-de-linux" className="continuar_leyendo ml-5">Continuar leyendo</Link>
						</div>
					</div>
				</div>

				<div className="col-12 col-sm-6 col-md-7 col-xl-4 area_articulo p-3">
					<div className="card" style={estile.ancho_articulo}>
						<img className="card-img-top" style={estile.alto_articulo} src={Art_Portada_2} alt="Card image" />
						<div className="card-body">
							<h6 className="mt-3 p-2 categoria">Desarrollo Web</h6>
							<h4 className="card-title">Curva de aprendizaje de React VS Angular</h4>
							<p className="card-text descripcion">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
							<div className="row justify-content-center reacciones">
								<div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
							</div>
							<Link to="/articulos/la-importancia-de-linux" className="continuar_leyendo ml-5">Continuar leyendo</Link>
						</div>
					</div>
				</div>
			

				<div className="col-12 col-sm-6 col-md-7 col-xl-4 area_articulo p-3">
					<div className="card" style={estile.ancho_articulo}>
						<img className="card-img-top" style={estile.alto_articulo} src={Art_Portada_3} alt="Card image" />
						<div className="card-body">
							<h6 className="mt-3 p-2 categoria">Desarrollo Web</h6>
							<h4 className="card-title">Curva de aprendizaje de React VS Angular</h4>
							<p className="card-text descripcion">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
							<div className="row justify-content-center reacciones">
								<div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
							</div>
							<Link to="/articulos/la-importancia-de-linux" className="continuar_leyendo ml-5">Continuar leyendo</Link>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Articulo;