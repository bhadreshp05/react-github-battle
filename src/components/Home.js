import React, { Component } from 'react';
import { Link } from 'react-router';
import MainComponent from '../components/MainComponent';

class Home extends Component {
	render() {
		return(
			<MainComponent>
				<h1>Github Battle</h1>
				<p className="lead">Some fancy motto</p>
				<Link to='playerOne'>
					<button type="button" className="btn btn-lg btn-success">Get Started</button>
				</Link>
			</MainComponent>
		)
	}
}

export default Home;
