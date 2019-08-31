import React from "react";
import "../componentes/css/bootstrap.css";
import { Helmet } from 'react-helmet';
import Menu from "../componentes/menu";
import Nav from "../componentes/navegacion";
import ItemExperiencia from "../componentes/item_experiencia";
import Footer from "../componentes/footer";

class Experiencia extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <Helmet>
                <title>Experiencia</title>
            </Helmet>
                <div className="row">
                <Menu/>
					<div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <ItemExperiencia/>
                    </div>
                    <div className="col-12">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experiencia;