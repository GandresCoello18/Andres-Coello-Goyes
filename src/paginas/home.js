import React from "react";
import Nav from "../componentes/navegacion";
import Portada from "../componentes/portada";
import "../componentes/css/bootstrap.css";

class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">
				<div className="row">
					<div className="col-2 hidden-md-down">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col">
                                <Portada/>
                            </div>
                        </div>
                    </div>
				</div>
			</div>     
        );
    }
}

export default Home;