import React from "react";
import "./css/bootstrap.css";
import "./css/aside_post.css";
import Portada from "./images/image_9.jpg";
import Categoria from "./sub_componentes/categorias";

class aside_derecho_post extends React.Component{
    render(){
        return(
            <di className="row">
                <div className="col-12 mt-3">
                    <input type="search" className="form-control" placeholder="Buscar Aqui..."/>
                </div>
                <div className="col-12 mt-5">
                    <Categoria color="#000" text="#000"/>
                </div>
                <div className="col-12 mt-5">
                    <h5 className="p-2">Post Populares</h5>
                    <ul className="nav flex-column popular_post">
                        <li className="p-2">
                            <a href="#">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Portada} />
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="p-1">React Native para principiantes</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-1">30-01-2019  &nbsp; &nbsp; &nbsp; &nbsp;  C 12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Portada} />
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="p-1">React Native para principiantes</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-1">30-01-2019  &nbsp; &nbsp; &nbsp; &nbsp;  C 12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="#">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={Portada} />
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="p-1">React Native para principiantes</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-1">30-01-2019  &nbsp; &nbsp; &nbsp; &nbsp;  C 12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </di>
        );
    }
}

export default aside_derecho_post;