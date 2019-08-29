import React from "react";
import Menu from "../../componentes/menu";
import Nav from "../../componentes/navegacion";
import PortadaPost from "../../componentes/portada_post";
import ContenidoMysql from "./contenido/contenido-mysql";
import AsidePost from "../../componentes/aside_derecho_post";
import Footer from "../../componentes/footer";
import "../../componentes/css/bootstrap.css";
import portadaMysql from "../../componentes/portada_articulos/base-de-dato-1.webp";

class Linux extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <PortadaPost titulo="¿Que son las Bases de Datos?" color="#fff" portada={portadaMysql} />
                    </div>
                    <div className="col-12 col-md-8">
                        <ContenidoMysql/>   
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