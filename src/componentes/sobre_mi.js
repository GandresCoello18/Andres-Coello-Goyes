import React from "react";
import "./css/bootstrap.css";
import "./css/sobre_mi.css";
import Diplomas from "./json/diplomas.json";
import Certificados from "./json/certificados";

class Habilidades extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 sobre_mi">
                    </div>
                <div className="col-12 col-md-8 sobre_mi mt-4 p-5 habilidades">
                    <h3 className="p-4 text-center">Habilidades</h3>
                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger barra html">HTML 90%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/174/174854.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info barra css">CSS3 70%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/732/732190.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra bootstrap">Bootstrap 90%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/1085/1085703.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra scss">SCSS 70%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/331/331383.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning barra javascript">JavaScript 90%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/1548/1548740.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra jquery">Jquery 75%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/37/37256.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra php">PHP 70%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/919/919830.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra mysql">MySQL 80%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/528/528260.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info barra react">React js 70%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/919/919851.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated git-github barra">Git y GitHub 75%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/3/3721.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra java">Java SE 50%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/226/226777.svg" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-10">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra optimizar">Optimizacion Web 60%</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="https://image.flaticon.com/icons/svg/1980/1980745.svg" />
                            </div>
                        </div>

                        <h3 className="text-center p-5">Formacion Online</h3>
                        <h4 className="p-3">Diplomas</h4>
                        
                        <div className="row mt-2 detalles-diplomas">
                            {Diplomas.diplomas.map( valor => (
                                <div className="col-12 col-md-6 col-lg-4" key={valor.id}>
                                    <a href={valor.enlace} target="_blanck">
                                        <div className="diplomas-areas p-4">
                                            <img src={valor.imagen} /><br/>
                                            <strong className="text-center">{valor.descripcion}</strong>
                                        </div>
                                    </a>    
                                </div>
                            ))}
                        </div>
                        
                        <h4 className="p-3 mt-3">Certicados</h4>
                        <div className="row mt-2 detalles-diplomas">
                            {Certificados.certificados.map( valor => (
                                <div className="col-12 col-md-6 col-lg-4 p-2" key={valor.id}>
                                    <a href={valor.enlace} target="_blanck">
                                        <div className="certificados-areas p-4">
                                            <img src={valor.imagen} /><br/>
                                            <strong className="text-center">{valor.descripcion}</strong>
                                        </div>
                                    </a>    
                                </div>
                            ))}
                        </div> 

                </div>
            </div>
        );
    }
}

export default Habilidades;