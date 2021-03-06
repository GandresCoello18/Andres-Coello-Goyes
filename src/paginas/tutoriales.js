import React from "react";
import "../componentes/css/bootstrap.css";
import { Helmet } from 'react-helmet';
import Menu from "../componentes/menu";
import Nav from "../componentes/navegacion";
import Itemtuto from "../componentes/item_tuto";
import Footer from "../componentes/footer";

class Tutoriales extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <Helmet>
                <title>Proyectos</title>
            </Helmet>
                <div className="row">
                <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-9 ml-lg-5">
                        <Itemtuto/>
                    </div>
                    <div className="col-12">
                            <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tutoriales;