import React from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

class Nav extends React.Component{
    render(){
        return (
			<div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
				<aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
					<h1 id="colorlib-logo"><a href="index.html">Andres Coello<span>.</span></a></h1>
					<nav id="colorlib-main-menu" role="navigation">
						<ul>
							<li className="colorlib-active"><a href="index.html">Inicio</a></li>
							<li><a href="photography.html">Tutoriales</a></li>
							<li><a href="travel.html">Articulos</a></li>
							<li><a href="fashion.html">Experiencias</a></li>
							<li><a href="about.html">Sobre Mi</a></li>
							<li><a href="contact.html">Contacto</a></li>
						</ul>
					</nav>

					<div className="colorlib-footer">
						<p>Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
			  			Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
						<ul>
							<li><a href="#"><i className="icon-facebook"></i></a></li>
							<li><a href="#"><i className="icon-twitter"></i></a></li>
							<li><a href="#"><i className="icon-instagram"></i></a></li>
							<li><a href="#"><i className="icon-linkedin"></i></a></li>
						</ul>
					</div>
				</aside>
			</div>	    
        );
    }
}

export default Nav;