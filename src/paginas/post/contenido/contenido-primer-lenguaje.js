import React from "react"
import "./css/sabias_que.css";
import Compartir from "../compartir";

class CPrimerLeng extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-5 parrafo_post">
                    <p class="p-2">De seguro te han dicho que el lenguaje de programacion que debes aprendeer primero es <b>c</b> o <b>c++</b> incluso <b>Java</b>, ya que estos son los padres de la programacion por asi decirlo y creen que dominnando esto lenguajes el resto sera cencillo. En ciertas situaciones es correcta pero no precisamente debes empezar con estos lenguajes.</p>
	  	   	        <p class="p-1">No quiero decir que no aprendas de estas <strong>tecnologías</strong>, creo yo, que es muy importante pero para muchas personas es muy complicado. Esto se debe a falta de:</p>
	  	   	        <p class="p-1">Lógica de programación, algebra basica o matematicas, intencion a resolver problemas.</p>
	  	   	        <p class="p-1">He aquí la importancia de saber manipular los <strong>Diagramas de flujo de datos</strong> o <strong>Algoritmo</strong>, saber cómo funcionan los operadores lógicos, operadores aritmeticos, variables, condiciones, ciclos y funciones.</p>
	  	   	        <p class="p-1">Una vez entendido todo esto estaras listo para tu primer lenguajes, puedes comenzar por los lenguajes mencionado al principio pero tambien recomiemdo a conocer <strong>PYTHON</strong> y <strong>JAVASCRIPT</strong> estos lenguajes son sensillos y utiles de aprender ya que en los ultimos años ha ido asendiendo de una forma espetacular, Son lo suficientemente potentes y lo mas increible es que tiene una comunidad grandísima con <b>documentación</b> suficiente para el aprendizaje.</p>
				    <p class="p-1"><strong>Python:</strong> es un lenguaje orientado a objetos lo cual hace tener una estructura de código mucho más entendible, su sintaxis es súper sencilla es muy similar al lenguaje natural, lo bueno es que se puede conseguir muy buenos resultados con pocas líneas de código, muchas empresas lo utilizan lo que quiere decir es que esta en Demanda.</p>
				    <p class="p-1"><strong>Javascript:</strong> es un lenguaje que funciona en los navegadores de internet y es el encargado de la interactividad con el usuario. Hace  un tiempo atrás no se concideraba tan potente debido a que no es un lenguaje compilado, perp hoy en dia javascript puede ser ejecutado en muchas areas de la informatica como Navegador, Servidor, Robotica, aplicaciones de escritorio y aplicaciones moviles esto es gracias a NODE.JS que es un entorno de ejecucion.</p>
				    <div class="row">
	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <p class="p-1">Existe la manera de aprender a programar super facil, es el camino de jugar a programar esto es gracias a programas como <strong>Scratch</strong> qque te permite crear elementos que reciben una secuencia de órdenes. Es muy utilizados por niños para desarrollar su nivel de razonamiento.</p>
	   	   	   	        </div>

	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <div id="sabias">
	   	   	   			        <h6 class="text-center">¿Sabias esto?</h6>
	   	   	   			        <p class="p-2">La programación mejore el razonamiento lógico de las personas haciendo esto capaces a los seres humanos a tomar decisiones más sabias, resolver dilemas e incluso buscar soluciones rapadas y fáciles de una manera óptima.</p>
	   	   	   		        </div>
	   	   	   	        </div>
                    </div>
                    <Compartir/>
                </div>
            </div>
        );
    }
}

export default CPrimerLeng;