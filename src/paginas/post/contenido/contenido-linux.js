import React from "react"
import "./css/contenido-linux.css";

class CLinux extends React.Component{
    render(){
        return(
            <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-8 col-xl-9 p-5 parrafo_post">
                <p className="p-2">
                    Aunque no es muy conocido por los usuarios comunes, Linux es un sistema operativo que está presente en muchos dispositivos y es de los más usados en los servidores. Veamos por que</p>
                    <p className="p-1"><strong>Estabilidad:</strong> una vez instalado el funcionamiento del sistema puede trabajar a largo plazo sin presentar fallas, a diferencia de Windows no requiere de reinicios para aplicar cambios o configuraciones al sistema.</p>
                    <p className="p-1"><strong>Seguridad:</strong> debido a que el sistema operativo es de código libre, todos los usuarios con conocimiento informático y programación pueden corregir estos errores para la comunidad. También Linux es atacado con menor frecuencia por virus o malware.</p>
                    <p className="p-1"><strong>Flexibilidad:</strong> puedes escoger el tamaño de recurso a utilizar es decir que no es necesario utilizar una interfaz gráfica si quieres reducir el consumo de memoria RAM .</p>
                    <p className="p-1"><strong>Costos:</strong> Linux es totalmente gratuito a pesar del propietario cuenta con licencia costosa para este producto.</p>
                    <p className="p-1"><strong>Libertad:</strong> está en total libertad en modificar a tu gusto la configuración, recursos, interfaz gráfica y todo lo necesario para satisfacer tus necesidades.</p>
                    <p className="p-1"><strong>Actualizaciones:</strong> aunque algunos les molesta estar instalando cada cierto tiempo paquetes de actualizacion, en linux los usuarios estan contentos de hacerlo ya que el software es mantenido por la comunidad y siempre encuentras algo increible.</p>
                    <p className="p-1"><strong>Comindad:</strong> Lunix es muy grande y gracias a esto todos se apoyan cuando tengan algun problema sin la necesidad de consultar el soporte tecnico.</p>
                </div>
            </div>
        );
    }
}

export default CLinux;