import React from "react";
import "../css/bootstrap.css";
import "./css/categorias.css";

function categoria(props){
    var estilos = {
        text_color: {
            color: props.color 
        },
        raya: {
            borderBottom: `1px solid ${props.color}`
        },
        titulo: {
            color: props.text
        }
    }
    return(
        <div>
            <h5 className="p-3" style={estilos.titulo}>Categoria</h5>
                <ul className="nav flex-column">
                    <li style={estilos.raya} ><a href="" style={estilos.text_color}>Desarrollo Web</a><span>(5)</span></li>
                    <li style={estilos.raya} ><a href="" style={estilos.text_color}>Librerias o Framework</a><span>(5)</span></li>
                    <li style={estilos.raya} ><a href="" style={estilos.text_color}>Aplicaciones Reactivas</a><span>(5)</span></li>
                    <li style={estilos.raya} ><a href="" style={estilos.text_color}> Resonsive Desing</a><span>(5)</span></li>
                </ul>
        </div>
    );
}

export default categoria;