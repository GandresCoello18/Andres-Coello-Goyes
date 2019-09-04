import React from "react";
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from "../paginas/home";
import Tutoriales from "../paginas/tutoriales";
import Articulos from "../paginas/articulos";
import Experiencia from "../paginas/experiencias";
import SobreMi from "../paginas/sobre_mi";
import Contacto from "../paginas/contacto";
import Linux from "../paginas/post/linux";
import MySQL from "../paginas/post/mysql";
import Https from "../paginas/post/https-http";
import Habilidad from "../paginas/post/mejorar-habilidades";
import Bits from "../paginas/post/bits-bytes";
import sitioAppWeb from "../paginas/post/sitio-app-web";
import peticionNet from "../paginas/post/peticion-internet";
import MaloPhp from "../paginas/post/malo-php";
import MetodoHack from "../paginas/post/metodo-hacker";
import AntesNube from "../paginas/post/antes-de-la-nube";
import ResponsiveD from "../paginas/post/responsive-desing";
import Sass from "../paginas/post/sass";
import PrimerLenguaje from "../paginas/post/primer-lenguaje";
import ProteccionHack from "../paginas/post/proteccion-con-hacker";
import videosP from "../paginas/tutorial_video/video_proyecto";
import Buscar from "../paginas/buscar";

function Redireccionar(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>           
                <Route exact path="/proyectos" component={Tutoriales}></Route>
                <Route exact path="/experiencia" component={Experiencia}></Route>
                <Route exact path="/articulos/:id_articulo" component={Articulos}></Route>
                <Route exact path="/sobre-mi" component={SobreMi}></Route>
                <Route exact path="/contacto" component={Contacto}></Route>
                <Route exact path="/video/:key" component={videosP}></Route>
                <Route exact path="/buscar/:palabra" component={Buscar}></Route>
                <Route exact path="/post/la-importancia-de-linux" component={Linux}></Route>
                <Route exact path="/post/base-de-datos-Mysql" component={MySQL}></Route>
                <Route exact path="/post/protocolos-de-internet" component={Https}></Route>
                <Route exact path="/post/habilidades-de-desarrollo" component={Habilidad}></Route>
                <Route exact path="/post/bits-bytes" component={Bits}></Route>
                <Route exact path="/post/sitios-aplicaciones-web" component={sitioAppWeb}></Route>
                <Route exact path="/post/peticiones-de-internet" component={peticionNet}></Route>
                <Route exact path="/post/importancia-de-php" component={MaloPhp}></Route>
                <Route exact path="/post/metodos-que-utilizan-los-hackers" component={MetodoHack}></Route>
                <Route exact path="/post/antes-y-despues-la-nube" component={AntesNube}></Route>
                <Route exact path="/post/responsive-desing" component={ResponsiveD}></Route>
                <Route exact path="/post/preprocesador-sass" component={Sass}></Route>
                <Route exact path="/post/primer-lenguaje" component={PrimerLenguaje}></Route>
                <Route exact path="/post/proteccion-contra-hacker" component={ProteccionHack}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Redireccionar;