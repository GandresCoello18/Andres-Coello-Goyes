import React from "react";
import "../componentes/css/bootstrap.css";
import Nav from "../componentes/navegacion";
import FormContato from "../componentes/form_contacto";
import Footer from "../componentes/footer";

class Contacto extends React.Component{
    render(){
        return(
            <section className="container-fluid">
                <div className="row">
                    <div className="col-2 hidden-md-down">
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