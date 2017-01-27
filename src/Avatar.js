import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import ProfileName from './ProfileName';
import ProfileLink from './ProfileLink';

class Avatar extends Component {
	render() {
		return(
			<div>
				<ProfilePic imgageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink userName={this.props.user.userName} />
			</div>
		)
	}
}

export default Avatar;
