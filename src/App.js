import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import AboutAuthor from "./components/AboutAuthor";
import Authorization from "./components/Authorization";

class Navigation extends Component{
	render() {
		return (
			<div>
				<div>
					<Route path="/" component={MainPage}/>
					<Route path="/aboutAuthor" component={AboutAuthor}/>
					<Route path="/authorization" component={Authorization}/>
				</div>
				<hr/>
				<ul>
					<li><Link to="/">MainPage</Link></li>
					<li><Link to="/aboutAuthor">AboutAuthor</Link></li>
					<li><Link to="/authorization">Authorization</Link></li>
				</ul>
			</div>
		);
	}
}

export default Navigation;



