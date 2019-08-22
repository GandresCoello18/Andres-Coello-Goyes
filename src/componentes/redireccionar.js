import React from "react";
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from "../paginas/home";
import Tutoriales from "../paginas/tutoriales";
import Articulos from "../paginas/articulos";
import Experiencia from "../paginas/experiencias";
import SobreMi from "../paginas/sobre_mi";
import Contacto from "../paginas/contacto";
import Linux from "../paginas/post/linux";

function Redireccionar(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>           
                <Route exact path="/proyectos" component={Tutoriales}></Route>
                <Route exact path="/experiencia" component={Experiencia}></Route>
                <Route exact path="/articulos" component={Articulos}></Route>
                <Route exact path="/sobre-mi" component={SobreMi}></Route>
                <Route exact path="/contacto" component={Contacto}></Route>
                <Route exact path="/articulos/la-importancia-de-linux" component={Linux}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Redireccionar;