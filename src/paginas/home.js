import React from "react";
import Nav from "../componentes/navegacion";
import Portada from "../componentes/portada";
import Articulo from "../componentes/articulos";
import Footer from "../componentes/footer";

class Home extends React.Component{
    render(){
        return(
            <div> 
                <div id="colorlib-page">
                        <Nav/>
                    <div id="colorlib-main">
                        <Portada/>
                        <section className="ftco-section">
    	                    <div className="container">
    		                    <div className="row justify-content-center mb-5 pb-2">
                                    <div className="col-md-7 heading-section text-center">
                                        <h2 className="mb-4">Articulos Recientes</h2>
                                        <p>Lo mas nuevos de mis videos tutoriales.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <Articulo/>
                                </div>
                            </div>
                        </section>
                        <Footer/>
                    </div>
                </div>
            </div>     
        );
    }
}

export default Home;