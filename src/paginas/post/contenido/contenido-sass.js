import React from "react"
import "./css/sabias_que.css";
import Compartir from "../compartir";

class CSass extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-5 parrafo_post">
                    <p class="p-2">Te imaginas escribir el código <strong>CSS</strong> de un proyecto entero que toma días en escribir, probar e implementar, <strong>¿Qué pasaría si después de algún tiempo decides cambiar los colores de todo los botones?</strong> De seguro tendrás que ir de botón en botón cambiando esa propiedad. </p>
	  	     	    <p class="p-1">Con <strong>Sass</strong> esto no sería algún problema ya que su forma de trabajar se asimila mucho a programación e incluso es considerado como un lenguaje de programación. <b>Sass</b> utiliza variables, condiciones, ciclos y <strong>Mixin</strong> que se pueden considerar como funciones.</p>
	  	     	    <p class="p-1">Volvamos al ejemplo del proyecto, si necesitas cambiar el color de todo los botones simplemente tendrías que cambiar el valor de la <strong>variable</strong> que estas utilizando, como sabrás un variable es un espacio de almacenamiento donde guardas un valor que puede ser remplazado. Al momento de hacer esto automáticamente todo los botones que tenía esa variable como color, se cambiaron.</p>
	  	     	    <p class="p-1">Los <b>preprocesadores</b> CSS son herramientas que nos permite escribir y traducir código no estándar a un código CSS estándar, al fin y al cabo los navegadores de internet solo entienden <b>CSS</b> y no <b>SCSS</b> es por eso que necesitan de una traducción <b>¿Y cómo se logra aquello?</b> Dependiendo de tu sistema operativo en que trabajes, existen programas como <b>PREPROS</b> utilizados en Windows o <b>CODEKIT</b> en caso de MAC.</p>
	  	     	    <p class="p-1"><b>¿Por qué utilizar Sass, si en realidad existen otros como LESS o Stylus?</b></p>
	  	     	    <p class="p-1">Toma en cuenta que todo los preprocesadores hacen los mismo <b>“ahorran tiempo y traducen el código”</b> pero Sass se ha convertido en el más usado y demandado. Su comunidad ha ido creciendo y es muy fácil encontrar ayuda si estas estancado, existen mucha documentación que te puede servir y puedes encontrar a colaboradores para ayudarte.</p>
	  	     	    <p class="p-1"><b>¿Cómo se escribe código en Sass?</b></p>
	  	     	    <p class="p-1">Empecemos por las variables, puedes agregarle un nombre y un valor ejemplo: <code>$color_boton: #cdcdcd;</code> se empieza con el signo de dólar asignándole su valor con dos putos y terminando en punto y coma.</p>
				    <p class="p-1">Para importar un archivo scss escribes  <code>@import “nombre_archivo.scss”;</code></p>
                    <div class="row">
	   	   	   	        <div class="col-12 col-md-6">
                            <pre>
                                <b>Condiciones</b> <code>@if</code>"{"instruccion"}"<code>@else</code>"{"instruccion"}"
                                <b>Para los ciclos:</b> <code>@for</code> $i <code>form</code> 1 <code>to</code> 5 "{"instrucciones-repetitivas"}"
                                <b>Y las funciones</b>
                                <code>Mixin</code> nombre(<b>$parametro</b>)"{"instruccion"}"
                                <p class="p-1">Para llamar al mixin o función escribes <code>@include nombre(100px);</code></p>
                            </pre>
	   	   	   	        </div>

	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <div id="sabias">
	   	   	   			        <h6 class="text-center">¿Sabias esto?</h6>
	   	   	   			        <p class="p-2">Sass es el preprocesador mas utilizado y mas demandado a diferencia de los demas procesadores, aumque todos hacen lo mismo siempre ahi algo de diferencia entre ellos.</p>
	   	   	   		        </div>
	   	   	   	        </div>
                    </div>
                    <Compartir/>
                </div>
            </div>    
        );
    }
}

export default CSass;