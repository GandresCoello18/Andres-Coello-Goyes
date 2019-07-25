import React from "react";

class Close extends React.Component{
    close(){
        document.querySelector(".navegacion").style.display = "none";
    }
    render(){
        return(
            <div className="cerrar" onClick={this.close}>
                <img src="https://image.flaticon.com/icons/svg/151/151882.svg"  />
            </div>
        );
    }
}

export default Close;