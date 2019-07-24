import React from "react";
import "./css/bootstrap.css";
import "./css/sobre_mi.css";

class Habilidades extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 sobre_mi">
                    <h3 className="p-1 text-center">Sobre Mi</h3>
                    <p className="p-1 text-center">Soy un joven autodidacta apasionado por el desarrollo de software y programacion en el area Web. Estoy constantemente disponible para aprender nuevas tecnologias y tendencias de productos informaticos. Estudiante en Desarrollo de software en el <a href="https://itsb.edu.ec/" target="_blanck">Instituto Tecnologico Superior Babahoyo</a> y Estudiante activo de <a href="https://platzi.com" target="_blanck">Platzi</a> en el area de Ingenieria.</p>
                </div>
                <div className="col-12 col-md-8 sobre_mi mt-4 p-5 habilidades">
                    <h3 className="p-1 text-center">Habilidades</h3>
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
                                    <div className="progress-bar progress-bar-striped progress-bar-animated barra java">Java SE 70%</div>
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
                        
                </div>
            </div>
        );
    }
}

export default Habilidades;