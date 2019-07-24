import React from "react";
import "./css/bootstrap.css";
import "./css/item_articulos.css";
import Portada from "./images/image_2.jpg";

class ItemArticulos extends React.Component{
    render(){
        return(
            <div className="row justify-content-end">
                <div className="col-12 col-lg-10 mr-xl-5 p-5">
                    <div className="card">
                        <img className="card-img-top" src={Portada} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">Desarrollo Web</h6>
                            <h4 className="card-text p-1">Curva de Aprendizaje React VS Angular. Opiniones diferentes</h4>
                            <p className="p-1">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn ml-1">Continuar Leyendo..</a>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10 p-5 mr-xl-5">
                    <div className="card">
                        <img className="card-img-top" src={Portada} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">Desarrollo Web</h6>
                            <h4 className="card-text p-1">Curva de Aprendizaje React VS Angular. Opiniones diferentes</h4>
                            <p className="p-1">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn ml-1">Continuar Leyendo..</a>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10 p-5 mr-xl-5">
                    <div className="card">
                        <img className="card-img-top" src={Portada} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">Desarrollo Web</h6>
                            <h4 className="card-text p-1">Curva de Aprendizaje React VS Angular. Opiniones diferentes</h4>
                            <p className="p-1">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn ml-1">Continuar Leyendo..</a>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-10 p-5 mr-xl-5">
                    <div className="card">
                        <img className="card-img-top" src={Portada} alt="Card image" />
                        <div className="card-body">
                            <h6 className="card-title p-1 mt-2">Desarrollo Web</h6>
                            <h4 className="card-text p-1">Curva de Aprendizaje React VS Angular. Opiniones diferentes</h4>
                            <p className="p-1">React es una libreria de interfaz de usuario creado y mantenido por facebook, mientras que Angular es un framework utilizado en Google</p>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn ml-1">Continuar Leyendo..</a>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3">M 200</div><div className="col-3">V 320</div><div className="col-3">C 30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 p-5 mr-5 mr-md-0">
                    <div className="paginacion">
                        <ul>
                            <li>A</li>
                            <li className="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>N</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemArticulos;