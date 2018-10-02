import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
	render(){
		return(
			<div>
			<nav className="navbar navbar-expand-md">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className = "container">
      	<Link className="navbar-brand" to="/">React Website</Link>
      	<div className="collapse navbar-collapse" id="navbarCollapse">
       	 <ul className="navbar-nav ml-auto">
          	<li className="nav-item active">
          	  <Link className="nav-link" to="/about">About</Link>
         	 </li>
         	 <li className="nav-item">
         	   <Link className="nav-link" to="/Contact">Contact</Link>
          	</li>
       	 </ul>
       	 </div>
      </div>
    </nav>
    </div>
		);
	}
}

export default Navbar