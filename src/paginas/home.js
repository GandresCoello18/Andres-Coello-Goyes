import React from "react";
import Nav from "../componentes/navegacion";
import Portada from "../componentes/portada";
import Articulos from "../componentes/articulos";
import Footer from "../componentes/footer";
import "../componentes/css/bootstrap.css";

class Home extends React.Component{
    reaccion_menu(){
        console.log(document.querySelector(".navegacion").classList[2]);
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
            <div className="container-fluid">
				<div className="row">
                    <div className="menu hidden-lg-up" style={estilos.menu} onClick={this.reaccion_menu}>
                        <img src="https://image.flaticon.com/icons/svg/462/462998.svg" style={estilos.tamano} />
                    </div>
					<div className="col-2 navegacion hidden-md-down">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-12">
                                <Portada/>
                            </div>
                            <div className="col-12">
                                <h3 className="text-center mt-sm-3 mt-sm-5">Articulos</h3>
                                <p className="text-center">Mis post de tecnologia mas recientes.</p>
                                <br/>
                                <Articulos/>
                            </div>
                            <div className="col-12">
                                <Footer/>
                            </div>
                        </div>
                    </div>
				</div>
			</div>     
        );
    }
}

export default Home;