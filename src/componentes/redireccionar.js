import React from "react";
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from "../paginas/home";
import Tutoriales from "../paginas/tutoriales";
import Articulos from "../paginas/articulos";
import SobreMi from "../paginas/sobre_mi";
import Contacto from "../paginas/contacto";

function Redireccionar(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>           
                <Route exact path="/tutoriales" component={Tutoriales}></Route>
                <Route exact path="/articulos" component={Articulos}></Route>
                <Route exact path="/sobre-mi" component={SobreMi}></Route>
                <Route exact path="/contacto" component={Contacto}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Redireccionar;