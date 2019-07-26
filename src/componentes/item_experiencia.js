import React from "react";
import "./css/bootstrap.css";
import "./css/item_experiencia.css";

class ItemExperiencia extends React.Component{
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 ml-lg-5 p-5">
                    <div className="area_experiencia color-fondo-experiencia">
                        <iframe src="https://www.youtube.com/embed/_wjD0nP21L4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="informacion_experiencia p-4">
                                <h5 className="text-center">Congreso atsa 2019</h5>
                                <p>El evento mas importante del instituto tecnologico superior babahayo. Se llevo a cabo charlas y exponencias de proyectos tecnologicos</p>
                                <a href="#" className="btn-ver-mas">Ver Mas</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 ml-lg-5 p-5">
                    <div className="area_experiencia color-fondo-experiencia">
                        <iframe src="https://www.youtube.com/embed/_wjD0nP21L4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="informacion_experiencia p-4">
                                <h5 className="text-center">Congreso atsa 2019</h5>
                                <p>El evento mas importante del instituto tecnologico superior babahayo. Se llevo a cabo charlas y exponencias de proyectos tecnologicos</p>
                                <a href="#" className="btn-ver-mas">Ver Mas</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemExperiencia;