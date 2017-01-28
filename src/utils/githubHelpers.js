import axios from 'axios';

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username) {
	// fetch username repos
	return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars(repos) {
	// calculate all the stars that user has
	return repos.data.reduce((prev, current) => {
		return prev + current.stargazers_count
	}, 0)
}

function getPlayerData(player) {
	// get Repos
	// getTotalStars
	// return object with that data
	return getRepos(player.login)
		.then(getTotalStars)
		.then((totalStars) => {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
}

function calculateScores(players) {
	// return an array, after doing some fancy algorithms to determine a winner
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
}

let helpers = {
	getPlayersInfo(players) {
		// fetch some data from github
		return axios.all(players.map((username) => {
			return getUserInfo(username)
		})).then((info) => {
			return info.map((user) => {
				return user.data;
			})
		}).catch((err) => {
			console.warn('Error in getPlayersInfo', err);
		})
	},
	battle(players) {
		let playerOneData = getPlayerData(players[0]);
		let playerTwoData = getPlayerData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch((err) => {
				console.warn('Error in getPlayersInfo: ', err);
			})
	}

}

export default helpers;
