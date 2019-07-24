import React from "react";
import "./css/bootstrap.css";
import uno from "./images/image_8.jpg";

class Carrusel extends React.Component{
    render(){
        return(
            <div className="row justify-content-end">
                <div className="col-12">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={uno} alt="Los Angeles" />
                            </div>
                            <div className="carousel-item">
                                <img src="chicago.jpg" alt="Chicago" />
                            </div>
                            <div className="carousel-item">
                                <img src="ny.jpg" alt="New York" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carrusel;