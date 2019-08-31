import React from "react";
import Menu from "../../componentes/menu";
import Nav from "../../componentes/navegacion";
import { Helmet } from 'react-helmet';
import PortadaPost from "../../componentes/portada_post";
import Contenido from "./contenido/contenido-sass";
import AsidePost from "../../componentes/aside_derecho_post";
import Footer from "../../componentes/footer";
import "../../componentes/css/bootstrap.css";
import portada from "../../componentes/portada_articulos/sass-1.webp";

class Linux extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <Helmet>
                <title>Sass un preprocesadores de css</title>
            </Helmet>
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <PortadaPost titulo="Sass - Programa y diseña a la vez" color="#fff" portada={portada} />
                    </div>
                    <div className="col-12 col-md-8">
                        <Contenido/>   
                    </div>
                    <div className="col-12 col-md-4">
                        <AsidePost/>
                    </div>
                    <div className="col-12">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Linux;