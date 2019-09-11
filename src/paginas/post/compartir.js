import React from "react";
import '../../componentes/css/bootstrap.css';

class compartir_redes extends React.Component{
	state = {
		titulo: '',
		texto: '',
		url: ''
	}

	componentDidMount(){
		var dir = window.document.URL;
		var tit = window.document.title;
		this.setState({
			titulo: tit,
			texto: 'Visita el sitio oficial de Andres Coello',
			url: dir
		});
		document.querySelector('.facebook').href += dir;
		document.querySelector('.twitter').href = `https://twitter.com/intent/tweet?text=${tit}&url=${dir}&hashtags=Andres_Coello`;
		document.querySelector('.whatsapp').href = `https://api.whatsapp.com/send?text=Me interesa el tema de ${tit} tu tambien deberias leerlo ${dir}`;
	}

	compartir = (e) => {
		e.preventDefault();
		if( ! navigator.share ){
			alert('Tu dispositivo electronico no soporta share');
			return;
		}

		navigator.share({
			title: this.state.titulo,
			text: this.state.texto,
			url: this.state.url
		}).then( () => alert('Contenido compartido') )
		.catch( (error) => alert('Ocurrio un error') )

	}

	render(){
		var tamaño = {
			medidas: {
				width: '50px',
				height: '50px',
				padding: '10px'
			}
		}
		return(
			<div className="row justify-content-center mt-4">
				<div className="col-12 col-sm-10 col-md-6">
					<h6>Share:</h6>
					<a className="facebook" target="_blanck" href="https://www.facebook.com/sharer/sharer.php?u="><img style={tamaño.medidas} src="https://image.flaticon.com/icons/svg/56/56582.svg" /></a>
					<a className="twitter" target="_blanck" href="https://twitter.com/intent/tweet?text=[]&url=[url]&hashtags=[hashtag]"><img style={tamaño.medidas} src="https://image.flaticon.com/icons/svg/54/54879.svg" /></a>
					<a className="whatsapp" target="_blanck" href="https://api.whatsapp.com/send?text=[text]"><img style={tamaño.medidas} src="https://image.flaticon.com/icons/svg/33/33447.svg" /></a>
					<a onClick={this.compartir}><img style={tamaño.medidas} src="https://image.flaticon.com/icons/svg/126/126495.svg" /></a>
				</div>
			</div>
		);
	}
}

export default compartir_redes;