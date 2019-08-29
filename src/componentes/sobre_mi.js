import React from "react";
import "./css/bootstrap.css";
import "./css/sobre_mi.css";
import Diplomas from "./json/diplomas.json";
import Certificados from "./json/certificados";
import Lenguajes from "./json/lenguajes.json";

class Habilidades extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 sobre_mi">
                    </div>
                <div className="col-12 col-md-8 sobre_mi mt-4 p-5 habilidades">
                    <h3 className="p-4 text-center">Habilidades</h3>
                        
                        

                        {Lenguajes.lenguajes.map(valor => (
                        	<div className="row mt-3">
                            	<div className="col-10" key={valor.id}>
                                	<div className="progress">
                                    	<div className={valor.color+" progress-bar progress-bar-striped progress-bar-animated barra "+valor.clase}>{valor.nombre}</div>
                                	</div>
                            	</div>
                            	<div className="col-2">
                                	<img src={valor.imagen} />
                            	</div>
                        	</div>
                        ))}

                        
                        <h3 className="text-center p-5">Formacion Online</h3>
                        <h4 className="p-3">Diplomas</h4>
                        
                        <div className="row mt-2 detalles-diplomas">
                            {Diplomas.diplomas.map( valor => (
                                <div className="col-12 col-md-6 col-lg-4 p-2" key={valor.id}>
                                    <a href={valor.enlace} target="_blanck">
                                        <div className="diplomas-areas p-4">
                                            <img src={valor.imagen} /><br/>
                                            <strong className="text-center">{valor.descripcion}</strong>
                                        </div>
                                    </a>    
                                </div>
                            ))}
                        </div>
                        
                        <h4 className="p-3 mt-3">Certicados</h4>
                        <div className="row mt-2 detalles-diplomas">
                            {Certificados.certificados.map( valor => (
                                <div className="col-12 col-md-6 col-lg-4 p-2" key={valor.id}>
                                    <a href={valor.enlace} target="_blanck">
                                        <div className="certificados-areas p-4">
                                            <img src={valor.imagen} /><br/>
                                            <strong className="text-center">{valor.descripcion}</strong>
                                        </div>
                                    </a>    
                                </div>
                            ))}
                        </div> 

                </div>
            </div>
        );
    }
}

export default Habilidades;