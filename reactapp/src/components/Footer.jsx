import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component{
	render(){
		return(
			<div>
				 <footer className="footer">
      				<div className="container">
       				 <span className="text-muted">My Website  &#169; {new Date().getFullYear()}</span>
      				</div>
    			</footer>
			</div>
			);
	}
}

export default Footer