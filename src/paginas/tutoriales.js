import React from "react";
import "../componentes/css/bootstrap.css";
import Nav from "../componentes/navegacion";
import Itemtuto from "../componentes/item_tuto";
import Footer from "../componentes/footer";

class Tutoriales extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 hidden-md-down">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-9 ml-lg-5">
                        <Itemtuto/>
                    </div>
                    <div className="col-12 col-lg-11  push-lg-1">
                            <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tutoriales;