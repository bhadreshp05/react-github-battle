import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}

		this.handleUpdateUser = this.handleUpdateUser.bind(this);
		this.handleSubmitUser = this.handleSubmitUser.bind(this);
	}

	handleUpdateUser(e) {
		this.setState({
			username: e.target.value
		});
	}

	handleSubmitUser(e) {
		e.preventDefault();
		let username = this.state.username;
		this.setState({
			username: ''
		});

		if(this.props.routeParams.playerOne) {
			// go to battle
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + username)
		}
	}

	render () {
		return (
			<Prompt
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				username={this.state.username}
				header={this.props.route.header} />
		)
	}
}

PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default PromptContainer;
