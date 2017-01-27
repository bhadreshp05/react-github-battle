import React, { Component } from 'react';

class ProfilePic extends Component {
	render() {
		return <img src={this.props.imgageUrl} style={{height: 200, width: 200}} />
	}
}

export default ProfilePic;
