import React from "react";

class Articulo extends React.Component{
    render(){
        var estile = {
            imagen_portada:{
                backgroundImage: 'url(images/image_1.jpg)'
            },
            imagen_person:{
                backgroundImage: 'url(images/person_2.jpg)'
            } 
        }
        return(
            <div className="row">
            <div className="col-md-4">
    				<div className="blog-entry">
							<a href="#" className="img img-2" style={estile.imagen_portada}></a>
							<div className="text text-2 pt-2 mt-3">
								<span className="category mb-3 d-block"><a href="#">Technology</a></span>
	              <h3 className="mb-4"><a href="#">The Newest Technology On This Year 2019</a></h3>
	              <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
	              <div className="author mb-4 d-flex align-items-center">
	            		<a href="#" className="img" style={estile.imagen_person}></a>
	            		<div className="ml-3 info">
	            			<span>Written by</span>
	            			<h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
	            		</div>
	            	</div>
	              <div className="meta-wrap align-items-center">
	              	<div className="half order-md-last">
		              	<p className="meta">
		              		<span><i className="icon-heart"></i>3</span>
		              		<span><i className="icon-eye"></i>100</span>
		              		<span><i className="icon-comment"></i>5</span>
		              	</p>
	              	</div>
	              	<div className="half">
		              	<p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
	              	</div>
	              </div>
	            </div>
						</div>
    			</div>

                <div className="col-md-4">
    				<div className="blog-entry">
							<a href="#" className="img img-2" style={estile.imagen_portada}></a>
							<div className="text text-2 pt-2 mt-3">
								<span className="category mb-3 d-block"><a href="#">Technology</a></span>
	              <h3 className="mb-4"><a href="#">The Newest Technology On This Year 2019</a></h3>
	              <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
	              <div className="author mb-4 d-flex align-items-center">
	            		<a href="#" className="img" style={estile.imagen_person}></a>
	            		<div className="ml-3 info">
	            			<span>Written by</span>
	            			<h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
	            		</div>
	            	</div>
	              <div className="meta-wrap align-items-center">
	              	<div className="half order-md-last">
		              	<p className="meta">
		              		<span><i className="icon-heart"></i>3</span>
		              		<span><i className="icon-eye"></i>100</span>
		              		<span><i className="icon-comment"></i>5</span>
		              	</p>
	              	</div>
	              	<div className="half">
		              	<p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
	              	</div>
	              </div>
	            </div>
						</div>
    			</div>

                <div className="col-md-4">
    				<div className="blog-entry">
							<a href="#" className="img img-2" style={estile.imagen_portada}></a>
							<div className="text text-2 pt-2 mt-3">
								<span className="category mb-3 d-block"><a href="#">Technology</a></span>
	              <h3 className="mb-4"><a href="#">The Newest Technology On This Year 2019</a></h3>
	              <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
	              <div className="author mb-4 d-flex align-items-center">
	            		<a href="#" className="img" style={estile.imagen_person}></a>
	            		<div className="ml-3 info">
	            			<span>Written by</span>
	            			<h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
	            		</div>
	            	</div>
	              <div className="meta-wrap align-items-center">
	              	<div className="half order-md-last">
		              	<p className="meta">
		              		<span><i className="icon-heart"></i>3</span>
		              		<span><i className="icon-eye"></i>100</span>
		              		<span><i className="icon-comment"></i>5</span>
		              	</p>
	              	</div>
	              	<div className="half">
		              	<p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
	              	</div>
	              </div>
	            </div>
						</div>
    			</div>
                </div>
        );
    }
}

export default Articulo;