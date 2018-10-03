import React, { Component } from 'react';
import "./social-icons.css";


class Social extends Component{
	render(){
		return(
			<div className="social-icons">
			<a href="https://github.com/richardchalmers"><i class = "fab fa-github fa-3x"></i></a>	
			<a href="https://www.linkedin.com/in/richard-chalmers-5034a432/"><i class = "fab fa-linkedin fa-3x"></i></a>
			<a href="https://codepen.io/HanBrolo/"><i class = "fab fa-codepen fa-3x"></i></a>	
			</div>
			);
	}
}

export default Social