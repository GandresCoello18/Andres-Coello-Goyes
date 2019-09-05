import React from "react";
import "./css/bootstrap.css";
import "./css/item_experiencia.css";
import experienciaJson from "./json/experiencia.json";

class ItemExperiencia extends React.Component{

    portada(imagen, video){
        if(imagen == ""){
            return <iframe src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }else{
            return <img src={imagen} />
        }
    }

    render(){
        return(
            <div className="row justify-content-center">
                {experienciaJson.experiencias.map( valor => (
                    <div className="col-12 col-lg-5 ml-lg-5 p-5" key={valor.id}>
                        <div className="area_experiencia color-fondo-experiencia">
                            {this.portada(valor.imagen, valor.video)}
                            <div className="informacion_experiencia p-4">
                                    <h5 className="text-center">{valor.titulo}</h5>
                                    <p>{valor.descripcion}</p>
                                    <a href={"./documentos/"+valor.descargar} download className="btn-ver-mas">Ver Mas</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ItemExperiencia;