import React from "react"
import "./css/sabias_que.css";
import Compartir from "../compartir";

class CPHP extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-5 parrafo_post">
                    <p class="p-2">Php es un lenguaje de programación y fue uno de los primeros creados para realizar sitios <strong>dinámicos</strong>, aunque es amado por unos y odiado por otros debido a su indisciplina en codificación obteniendo como resultado un código <strong>“Espagueti”</strong> algo que es muy complejo de entender.</p>
	  	   	        <p class="p-1">Con el transcurso del tiempo fue evolucionando y facilitándose su desarrollo. Lo único que necesitas para empezar es un editor de código para la escritura de tus instrucciones o incluso solo el bloc de notas de tu dispositivo. Un servidor <b>local</b> para realizar la ejecución de tus instrucciones si deseas crearlo y configurarlo tú mismo, no hay ningún problema pero recuerda que existen programas como <strong>XAMPP o WAMPSERVER</strong> para facilitar esta etapa.</p>
	  	   	        <p class="p-1">Lo siguiente es conocer la sintaxis de php ya que todos los lenguajes tienen algo interesante para conocer, <b>¿cómo se escribe y cuál es su funcionalidad?</b> Veamos algunas palabras claves.</p>
	  	   	        <p class="p-1"><code>echo</code> “hola mundo”; - su funcionalidad es imprimir en pantalla lo especificado.</p>
	  	   	        <p class="p-1">
	  	   	        <code>$</code>miVariable = “soy una variable”;  - su funcionalidad es crear variables ya sea de tipo <code>String, number, boolean, int, float</code>.</p>
	  	   	        <p class="p-1">
				    <code>$</code>arreglo = <code>array</code> (“andes”, ”Coello”, ”Goyes”); - su funcionalidad es crear arreglos. Un arreglo simplemente es una variable que puede contener muchos valores.</p>
				    <p class="p-1">
				    <code>var-dump</code> ($arreglo); - sirve para mostrar al arquitectura de un arreglo.</p>
				    <p class="p-1">Si deseas un código más simple y entendible, puedes aprender a utilizar el paradigma <strong>POO</strong> – Programación Orientado a Objetos.</p>
			        <div class="row">
	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <p class="p-1">Lo que lo hace muy popular son sus funcionalidades como: conexiones  a bases de datos, gestión de directorios, manipulación de archivos, creación de Sesiones, creación de Cookies, seguridad, Usa extensiones.</p>
	   	   	   	        </div>

	   	   	   	        <div class="col-12 col-md-6">
	   	   	   		        <div id="sabias">
	   	   	   			        <h6 class="text-center">¿Sabias esto?</h6>
	   	   	   			        <p class="p-2">Gracias a Php se construyeron grandes proyectos y aplicaciones donde nosotros utilizamos día a día como Facebook y Wikipedia.</p>
	   	   	   		        </div>
	   	   	   	        </div>
                    </div>
                    <Compartir/>
                </div>
            </div>
        );
    }
}

export default CPHP;