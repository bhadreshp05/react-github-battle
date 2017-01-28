import React, { Component } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			playersInfo: []
		}

		this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
	}

	componentDidMount() {
		let query = this.props.location.query;
		// fetch info from github and update the state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then((players) => {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			});
	}

	handleInitiateBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	}

	render () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				header={this.props.route.header}
				onInitiateBattle={this.handleInitiateBattle} />
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
