import React, { Component } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			playersInfo: []
		}
	}

	componentDidMount() {
		let query = this.props.location.query;
		// fetch info from github and update the state
	}

	render () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				header={this.props.route.header} />
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
