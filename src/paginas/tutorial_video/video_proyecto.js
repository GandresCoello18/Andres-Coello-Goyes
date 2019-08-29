import React from "react";
import "./css/video_proyect.css";
import "../../componentes/css/bootstrap.css";
import Nav from "../../componentes/navegacion";
import Menu from "../../componentes/menu";
import Footer from "../../componentes/footer";
import Proyect from "../../componentes/json/video_proyect.json";
import video from "./uno.mp4";

class VideoProyect extends React.Component{
    state = {
        datos: []
    }

    componentDidMount(){
        console.log(this.props.match.params.key);
    }

    render(){
        return(
            <section className="container-fluid">
                <div className="row">
                    <Menu/>
                    <div className="col-2 navegacion">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="row justify-content-center ml-md-5 ">
                                    
                                    <div className="alert titulo_video mt-5 mt-md-2">{Proyect.proyectosVideo[this.props.match.params.key].tema}</div>
                                    <iframe src={Proyect.proyectosVideo[this.props.match.params.key].video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    <div className="col-12 col-lg-6 visitar p-3">
                                        <a href={Proyect.proyectosVideo[this.props.match.params.key].urlApp} target="_blanck"> <img src="https://image.flaticon.com/icons/svg/235/235196.svg" /> <strong>Visitar aplicacion o sitio web</strong></a>
                                    </div>
                                    <div className="col-12 col-lg-6 codigo p-3">
                                        <a href={Proyect.proyectosVideo[this.props.match.params.key].urlGitHub} target="_blanck"> <img src="https://image.flaticon.com/icons/svg/733/733553.svg" /> <strong>Ver codigo fuente del app</strong></a>
                                    </div>

                                    <div className="col-12 p-4">
                                        <article>
                                            <div className="row p-2">
                                                <div className="col-2">
                                                    <img src="https://image.flaticon.com/icons/svg/1346/1346574.svg" />
                                                </div>
                                                <div className="col-10">
                                                    <h5 className="mt-2">Tecnologias o Herramientas utilizadas</h5>
                                                </div>
                                            </div>
                                            <hr/>

                                                <div className="row p-2">
                                                    <div className="col-12">
                                                        <div className="progress">
                                                            {Proyect.proyectosVideo[this.props.match.params.key].lenguajes.map( valor => (
                                                                <div className={"progress-bar progress-bar-striped progress-bar-animated " + valor.clase} style={{width: valor.porcentaje+'%'}}>{valor.porcentaje +"% "}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row mt-2">
                                                            {Proyect.proyectosVideo[this.props.match.params.key].lenguajes.map( valor => (
                                                                <div className="col" style={{textAlign: "center"}}><strong>{valor.propiedad}</strong></div>
                                                            ))}
                                                        </div>    
                                                    </div>
                                                </div>
                                                
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <article className="mt-2">
                                    <div className="row p-2">
                                        <div className="col-2">
                                            <img src="https://image.flaticon.com/icons/svg/1486/1486302.svg" />
                                        </div>
                                        <div className="col-10">
                                            <h5 className="mt-2">Descripcion</h5>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p className="p-3">{Proyect.proyectosVideo[this.props.match.params.key].descipcion}</p>
                                </article>
                            </div>
                            <div className="col-12">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoProyect;