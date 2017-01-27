import React, { Component } from 'react';

class ProfileLink extends Component {
	render() {
		return(
			<div>
				<a href={'https://www.github.com/' + this.props.userName}> {this.props.userName} </a>
			</div>
		)
	}
}

export default ProfileLink;
