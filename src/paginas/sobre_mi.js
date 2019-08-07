import React from "react";
import "../componentes/css/bootstrap.css";
import Menu from "../componentes/menu";
import Nav from "../componentes/navegacion";
import Portada from "../componentes/portada";
import Habilidades from "../componentes/sobre_mi";
import Footer from "../componentes/footer";

const text = () => {
    return(
        <b>
            Soy un joven autodidacta apasionado por el desarrollo de software y programacion en el area Web. Estoy constantemente disponible para aprender nuevas tecnologias y tendencias de productos informaticos. Estudiante en Desarrollo de software en el <a href="https://itsb.edu.ec/" target="_blanck">Instituto Tecnologico Superior Babahoyo</a> y Estudiante activo de Platzi en el area de Ingenieria.
        </b>
    );
}

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
                        <Portada contenido={text}/>
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