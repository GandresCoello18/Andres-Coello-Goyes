import React from "react";
import "./css/bootstrap.css";
import "./css/item_tuto.css";
import Uno from "./images/image_7.jpg";
import Dos from "./images/image_10.jpg";
import Tres from "./images/image_11.jpg";

class Item extends React.Component{
    render(){
        return(
            <div className="row ml-lg-5 mt-5 mt-lg-1">
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Uno} /></a><div className="fondo"><h5 className="text-center tema">React js</h5><p className="text-center tipo">Frontend</p></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Dos} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Tres} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Uno} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Dos} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Tres} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Uno} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Dos} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Tres} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Uno} /></a><div className="fondo"></div></div>
                <div className="col-12 col-md-4 col-xl-3 item_tuto"><a href="index"><img className="img-fluid" src={Dos} /></a><div className="fondo"></div></div>
            </div>
        );
    }
}

export default Item;