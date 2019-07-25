import React from "react";
import Nav from "../componentes/navegacion";
import Menu from "../componentes/menu";
import Portada from "../componentes/portada";
import Articulos from "../componentes/articulos";
import Footer from "../componentes/footer";
import "../componentes/css/bootstrap.css";

class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">
				<div className="row">
                    <Menu/>
					<div className="col-2 navegacion">
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