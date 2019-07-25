import React from "react";
import "./css/bootstrap.css";
import "./css/menu.css";

class Menu extends React.Component{
    reaccion_menu(){
        let elemento = document.querySelector(".navegacion");
        elemento.style.display = "block";

        let elemento_2 = document.querySelector(".fila_navegacion");
        elemento_2.style.animationName = "ani";
        elemento_2.style.animationDuration = "1s";
    }
    render(){
        var estilos = {
            menu:{
                position: "absolute",
                zIndex: "9",
                left: "10px",
                top: "15px",
                cursor: "pointer"
            },
            tamano:{
                width: "40px",
                height: "40px"
            }
        }
        return(
            <div className="menu" style={estilos.menu} onClick={this.reaccion_menu}>
                <img src="https://image.flaticon.com/icons/svg/462/462998.svg" style={estilos.tamano} />
            </div>
        );
    }
}

export default Menu;