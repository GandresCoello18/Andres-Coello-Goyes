import React from "react";
import Menu from "../../componentes/menu";
import { Helmet } from 'react-helmet';
import Nav from "../../componentes/navegacion";
import PortadaPost from "../../componentes/portada_post";
import ContenidoHttps from "./contenido/contenido-https";
import AsidePost from "../../componentes/aside_derecho_post";
import Footer from "../../componentes/footer";
import "../../componentes/css/bootstrap.css";
import portada from "../../componentes/portada_articulos/https.webp";

class Linux extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <Helmet>
                <title>Protocolo Http y Https</title>
            </Helmet>
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <PortadaPost titulo="Protocolo Https y Http, son iguales?" color="#000" portada={portada} />
                    </div>
                    <div className="col-12 col-md-8">
                        <ContenidoHttps/>   
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