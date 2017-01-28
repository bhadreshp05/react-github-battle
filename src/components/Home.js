import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
	render() {
		let styles = {
			transparentBg: {
				background: 'transparent'
			}
		}
		return(
			<div className="jumbotron col-sm-12 text-center" style={styles}>
				<h1>Github Battle</h1>
				<p className="lead">Some fancy motto</p>
				<Link to='playerOne'>
					<button type="button" className="btn btn-lg btn-success">Get Started</button>
				</Link>
			</div>
		)
	}
}

export default Home;
