import React from "react"
import "./css/sabias_que.css";
import Compartir from "../compartir";

class CHabilidades extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-2 p-md-5 parrafo_post">
                    <p class="p-2">Te ha sucedido que tienes el entusiamo, las ganas, los motivos necesarios para aprender algo pero con pasar el tiempo ese motivacion va disminullendo. dejame decirte que no eres el unico a quien le sucede esto pues es muy comun pero tienes que saber como sobrellevarlo.</p>
	   	   	        <p class="p-1">Es muy duro permanecer atrento a algo como una: <strong>explicacion</strong> mas cuando se trata de un tema que no te llama la atencion y ese es el primer punto instrullete de aquellos temas que te facinen, que te llamen la atencion, a eso que amas hacer. Otro punto importante <b>rodeate</b> de la gente que contenga tus mismas paciones ya ellos te pueden animar a seguir con tus obetivos.</p>
	   	   	        <p class="p-1">Es comun desanimarte o incluso aislarte de lo que mas te gusta simplemente por comentarios negativos, obsenos de la gente inapropiada que te rodea, piensa en esto te gusta la musica clasica, tranquila y relajante. Pero a tus compañeros le gusta el ruido, harmar escandalos sin importar donde esten y comparten los mismo gutos que los tuyos. Crees tu que te ayudaran a progresar y mejorar tus habilidades o mas bien crees que te estancaran involucrandote a cosas que no biene con tu estilo.</p>
	   	   	        <p class="p-1">Leer articulos o definiciones de aquellos temas te ayudaran a entenden mejor tus objetivos ya que de nada sirve que leas o estudies si no tienes claro lo que quieres hacer. Deja a un lado la timidez y pregunta a personas con experiensa en que puedes mejorar y entablar una amistad con uno de ellos, observar las habilidades de los demas y preguntandote a ti mismo que me falta por hacer o que me falta por mejorar son preguntas que debes hacerte.</p>
	   	   	        <div class="row">
	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <p class="p-1">Consulta a internet, practicamente se encuentra un monton de informacion valiosa y opiniones de gente con experienza. esto es una herramienta no un juguete de entretenimiento.</p>
	   	   	   	        </div>

	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <div id="sabias">
	   	   	   			        <h6 class="text-center">¿Sabias esto?</h6>
	   	   	   			        <p class="p-2">Dedicarle un poco mas de tiempo y esfuerzo mas de los acostumbrado puede generarte mejores resultado en tu aprendizaje.</p>
	   	   	   		        </div>
	   	   	   	        </div>
                    </div>
                    <Compartir/>
                </div>
            </div>
        );
    }
}

export default CHabilidades;