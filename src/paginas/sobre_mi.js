import React from "react";
import "../componentes/css/bootstrap.css";
import Menu from "../componentes/menu";
import Nav from "../componentes/navegacion";
import Carrusel from "../componentes/carrusel";
import Habilidades from "../componentes/sobre_mi";
import Footer from "../componentes/footer";

class SobreMi extends React.Component{
    render(){
        return(
            <section className="container-fluid">
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <Carrusel/>
                    </div>
                    <div className="col-12 mt-4">
                        <Habilidades/>
                    </div>
                    <div className="col-12">
                        <Footer/>
                    </div>
                </div>
            </section>
        );
    }
}

export default SobreMi;