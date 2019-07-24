import React from "react";
import "./css/bootstrap.css";

class FormContacto extends React.Component{
    render(){
        var estilos = {
            boton: {
                backgroundColor: "#132238",
                color: "#fff"
            },
            imagenes:{
                width: "40px",
                height: "40px"
            }
        }
        return(
            <div className="row justify-content-end justify-content-md-end">
                <div className="col-12 col-lg-5 p-5">
                    <h4 className="text-center">Informacion</h4>
                    <div className="row justity-content-center p-3">
                        <div className="col-2">
                            <img src="https://image.flaticon.com/icons/svg/732/732200.svg" style={estilos.imagenes}/>
                        </div>
                        <div className="col-5">
                            <h6 className="p-1">goyeselcoca@gmail.com</h6>
                        </div>
                    </div>
                    
                    <div className="row justity-content-center p-3">
                        <div className="col-2">
                            <img src="https://image.flaticon.com/icons/svg/149/149007.svg" style={estilos.imagenes}/>
                        </div>
                        <div className="col-7">
                            <h6 className="p-1">+593 979839846</h6>
                        </div>
                    </div>

                    <div className="row justity-content-center p-3">
                        <div className="col-2">
                            <img src="https://image.flaticon.com/icons/svg/252/252025.svg" style={estilos.imagenes}/>
                        </div>
                        <div className="col-7">
                            <h6 className="p-1">Ecuador - Los Rios - San Juan de Pueblo viejo</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 col-lg-5 p-5">
                    <h4 className="text-center p-3">Formulario</h4>
                    <form>
                        <input type="text"  className="form-control mt-1" placeholder="Nombre"/>
                        <input type="email"  className="form-control mt-3" placeholder="Email"/>
                        <input type="text"  className="form-control mt-3" placeholder="Asunto"/>
                        <textarea className="form-control mt-3" placeholder="Mensaje.."></textarea>
                        <input type="button" className="btn mt-3" style={estilos.boton} value="Enviar"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormContacto;