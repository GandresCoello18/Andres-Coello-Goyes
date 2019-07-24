import React from "react";
import "./css/bootstrap.css";
import "./css/footer.css";
import Categorias from "./sub_componentes/categorias";
//import "./css/style.css";

class Footer extends React.Component{
    render(){
        return(
            <footer className="row justify-content-center justify-content-lg-end mt-5">
              <div className="col-12 col-md-3 p-2">
                  <Categorias text="#fff"/>
              </div>
              <div className="col-12 col-md-3 p-2">
                  <h5 className="p-3 text-white">Experiencias</h5>
                  <ul className="nav flex-column">
                    <li><a href="">Congreso APSAT</a><span>(2)</span></li>
                    <li><a href="">Casa abierta itsb software</a><span>(2)</span></li>
                    <li><a href="">Charla para programadores</a><span>(1)</span></li>
                  </ul>
              </div>
              <div className="col-12 col-md-3 p-1">
                  <h5 className="p-3 text-white">Mis Datos</h5>
                    <ul className="nav flex-column">
                      <li>Ecuador - Los Rios - San Juan de Puebloviejo</li>
                      <li>+593 979839846</li>
                      <li>goyeselcoca@gmail.com</li>
                    </ul>
              </div>
            </footer>
        );
    }
}

export default Footer;