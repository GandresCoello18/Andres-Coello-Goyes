import React from "react";
import "../componentes/css/bootstrap.css";
import Menu from "../componentes/menu";
import Nav from "../componentes/navegacion";
import FormContato from "../componentes/form_contacto";
import Footer from "../componentes/footer";

class Contacto extends React.Component{
    render(){
        return(
            <section className="container-fluid">
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <FormContato/>
                    </div>
                    <div className="col-12">
                        <Footer/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacto;