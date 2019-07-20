import React from "react";
import "./css/bootstrap.css";
import "./css/footer.css";
//import "./css/style.css";

class Footer extends React.Component{
    render(){
        return(
            <footer className="row justify-content-center justify-content-lg-end mt-5">
              <div className="col-12 col-md-4 p-2">
                  <h5 className="p-3 text-white">Categoria</h5>
                  <ul className="nav flex-column">
                    <li><a href="">Desarrollo Web</a><span>(5)</span></li>
                    <li><a href="">Librerias o Framework</a><span>(5)</span></li>
                    <li><a href="">Aplicaciones Reactivas</a><span>(5)</span></li>
                    <li><a href=""> Resonsive Desing</a><span>(5)</span></li>
                  </ul>
              </div>
              <div className="col-12 col-md-3 p-2">
                  <h5 className="p-3 text-white">Experiencias</h5>
                  <ul className="nav flex-column">
                    <li><a href="">Congreso APSAT</a><span>(2)</span></li>
                    <li><a href="">Casa abierta itsb software</a><span>(2)</span></li>
                    <li><a href="">Charla para programadores</a><span>(1)</span></li>
                  </ul>
              </div>
              <div className="col-12 col-md-3 p-2">
                  <h5 className="p-3 text-white">Mis Datos</h5>
                    <p>Ecuador - Los Rios - San Juan de Puebloviejo</p> 
                    <p>+593 979839846</p>
                    <p>goyeselcoca@gmail.com</p>
              </div>
            </footer>
        );
    }
}

export default Footer;