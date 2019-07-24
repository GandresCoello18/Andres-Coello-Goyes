import React from "react";
import "../componentes/css/bootstrap.css";
import Nav from "../componentes/navegacion";
import ItemArticulos from "../componentes/item_articulos";
import AsidePost from "../componentes/aside_derecho_post";
import Footer from "../componentes/footer";

class Post extends React.Component{
    render(){
        return(
            <section className="container-fluid">
                <div className="row">
                    <div className="col-2 hidden-md-down">
                        <Nav/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <ItemArticulos/>
                            </div>
                            <div className="col-12 col-md-4">
                                <AsidePost/>
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

export default Post;