import React from "react";
import Menu from "../../componentes/menu";
import { Helmet } from 'react-helmet';
import Nav from "../../componentes/navegacion";
import PortadaPost from "../../componentes/portada_post";
import ContenidoLinux from "./contenido/contenido-linux";
import AsidePost from "../../componentes/aside_derecho_post";
import Footer from "../../componentes/footer";
import "../../componentes/css/bootstrap.css";
import portadaLinux from "../../componentes/portada_articulos/linux-importante.webp";

class Linux extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <Helmet>
                <title>La importancia de linux</title>
            </Helmet>
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <PortadaPost titulo="Linux ¿Lo conoces?, pues deberias" color="#fff" portada={portadaLinux} />
                    </div>
                    <div className="col-12 col-md-8">
                        <ContenidoLinux/>
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