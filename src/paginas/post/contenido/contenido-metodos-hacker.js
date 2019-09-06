import React from "react"
import "./css/sabias_que.css";
import Compartir from "../compartir";

class CMetodoHck extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-5 parrafo_post">
                    <p class="p-2">La mayoría de las personas creen que los hackers son magos, debido a que obtiene información que se suponía imposible de obtener pero la realidad es que estos hackers tiene un conocimiento muy amplio en lo que es la <strong>“seguridad informática”</strong> y conocen métodos de ataque para obtener cierta información.</p>
	  	     	    <p class="p-1">En la mayoría de los casos el culpable es el usuario mismo, debido a que no tiene ni un breve conocimiento en la <strong>“seguridad informática”</strong> haciendo así las cosas más fáciles para los hackers, estas personas no utilizan súper computadoras ni nada por el estilo, simplemente necesitan un ordenador y sus conocimientos.</p>
	  	     	    <p class="p-1"><strong>Fuerza Bruta:</strong> Se utiliza para descifrar o recuperar alguna contraseña realizando todo los intentos y combinaciones posibles hasta encontrar el verdadero para permitir en acceso.</p>
	  	     	    <p class="p-1"><strong>Engaños:</strong> Se llevan a cabo mediantes correos electrónicos o sitios web falsos donde se encuentran un sin números de anuncios como: ‘has ganado un premio, eres el usuario 10000 felicitaciones, has ganado un viaje’.</p>
	  	     	    <p class="p-1"><strong>Rastreo:</strong> se hace a través de rastreo de datos fluyendo a través de redes informáticas como: <b>WIFI, LAN, WAN</b>. Si está conectado a red pública es posible que sea una trampa del atacante debido a que pueda leer toda tu información si están conectado a una misma red.</p>
	  	     	    <p class="p-1"><strong>Suplantación de identidad:</strong> incluyen correos con identidad falsa o de formas bancarias. Utilizan <b>DNS</b> para re direccionar a los usuarios a un sitio falso o incluso utilizan direcciones <b>IP</b> totalmente falsas para acceder a sitios en específico.</p>
	  	     	    <p class="p-1"><strong>Puerta trasera:</strong> se lleva a cabo gracias a aplicaciones o programas que son instaladas en nuestros dispositivos, insertando así <b>Troyanos</b> o pueden leer los que escribes gracias a Grabadoras de teclado, también mediante escaneos falsos.</p>

                        <div class="row">
	   	   	   	            <div class="col-12 col-md-6">
	   	   	   		            <p class="p-1"><strong>Ingeniería Social:</strong> incluyen ataques utilizando a los usuarios como los eslabones débiles. Pueden que te llamen con el fin de sacar información de ti o buscar en tus perfiles en las redes sociales. </p>
	   	   	   	            </div>

	   	   	   	            <div class="col-12 col-md-6">
	   	   	   		            <div id="sabias">
	   	   	   			            <h6 class="text-center">¿Sabias esto?</h6>
	   	   	   			            <p class="p-2"> Cuando un hacker realiza sus fechorías, siempre queda un registro de las actividades que realizo, así es como borran todo el historial ya sea del sistema operativo o de los navegadores, lo hacen con el fin de no ser rastreados o encontrados. </p>
	   	   	   		            </div>
	   	   	   	            </div>
                        </div>
                    <Compartir/>    
                </div>
            </div>
        );
    }
}

export default CMetodoHck;