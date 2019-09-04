import React from "react";
import "../componentes/css/bootstrap.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Nav from "../componentes/navegacion";
import Menu from "../componentes/menu";
import AsidePost from "../componentes/aside_derecho_post";
import Footer from "../componentes/footer";
import ArticulosJson from "../componentes/json/articulos.json"


class Buscar extends React.Component{
	state = {
		datosEncontrados: [],
		status: null
	}

	componentDidMount(){
		var tomar = [];
		var contador = 0;
		for(var i=0; i<ArticulosJson.articulos.length; i++){
			var title = ArticulosJson.articulos[i].titulo;
			if(title.toUpperCase().indexOf(this.props.match.params.palabra) != -1 || title.toLowerCase().indexOf(this.props.match.params.palabra) != -1 ){
				tomar[i] = ArticulosJson.articulos[i];
				this.setState({
					datosEncontrados: tomar,
					status: true
				});
				contador = contador + 1;
			}
		}
		if(contador == 0){
			this.setState({
				status: false
			});
		}
	}

    render(){
        var item = ['proyectos', 'articulos/1', 'experiencia', 'sobre-mi', 'contacto'];
        switch(this.props.match.params.palabra){
            case item[0]:
                window.location.href = "/"+item[0];
             break;
             case item[1]:
                window.location.href = "/"+item[1];
             break;
             case item[2]:
                window.location.href = "/"+item[2];
             break;
             case item[3]:
                window.location.href = "/"+item[3];
             break;
             case item[4]:
                window.location.href = "/"+item[4];
             break;   
        }
        return(
            <section className="container-fluid">
            <Helmet>
                <title>Buscar: {this.props.match.params.palabra}</title>
            </Helmet>
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-md-8">
                            	{this.state.status ? (
                            		this.state.datosEncontrados.map( valor => (
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
                					))
                            	): (
                            		<div className="alert alert-danger text-center mt-3 mt-md-5"><strong>Lo siento, pero lo que estas buscando no existe, puedes hacermelo saber con un <a href="contacto">mensaje</a>. Gracias </strong></div>
                            	) }
                            </div>
                            <div className="col-12 col-md-4">
                                <AsidePost/>
                            </div>
                            <div className="col-12">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Buscar;