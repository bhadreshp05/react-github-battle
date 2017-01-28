import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/styles';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainComponent from '../components/MainComponent';
import Loading from '../components/Loading';

const StartOver = () => {
	return (
		<div className="col-sm-12" style={styles.space}>
			<Link to="/playerOne">
				<button type="button" className="btn btn-lg btn-danger">Start Over</button>
			</Link>
		</div>
	)
}

const Results = (props) => {
	if(props.isLoading === true) {
		return <Loading text="Loading Results" speed={100} />
	}
	if(props.scores[0] === props.scores[1]) {
		return (
			<MainComponent>
				<h1>It's a tie!</h1>
				<StartOver />
			</MainComponent>
		)
	}
	let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	let losingINdex = winningIndex === 0 ? 1 : 0;
	return (
		<MainComponent>
			<h1>Results</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Winner'>
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Loser">
					<UserDetails score={props.scores[losingINdex]} info={props.playersInfo[losingINdex]}/>
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainComponent>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

export default Results;
