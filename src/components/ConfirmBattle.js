import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/styles';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainComponent from '../components/MainComponent';
import Loading from '../components/Loading';

// function puke(obj) {
// 	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
// }

const ConfirmBattle = (props) => {
	return props.isLoading === true
		? <Loading text='Wait a moment'/> :
		<MainComponent>
			<h1>{props.header}</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header="Player 1">
					<UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Player 2">
					<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className="col-sm-8 col-sm-offset-2">
				<div className="col-sm-12" style={styles.space}>
					<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
						Initiate Battle!
					</button>
				</div>
				<div className="col-sm-12" style={styles.space}>
					<Link to="/playerOne">
						<button type="button" className="btn btn-lg btn-danger">
							Reselect Players
						</button>
					</Link>
				</div>
			</div>
		</MainComponent>
}

ConfirmBattle.propTypes = {
	header: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle;
