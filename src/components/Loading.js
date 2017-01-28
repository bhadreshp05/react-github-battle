import React, { PropTypes } from 'react'
import styles from '../styles/styles';

class Loading extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			text: this.props.text
		}
	}

	componentDidMount() {
		let stopper = this.props.text + '...';
		this.interval = setInterval(() => {
			if(this.state.text === stopper) {
				this.setState({
					text: this.props.text
				});
			} else {
				this.setState({
					text: this.state.text + '.'
				});
			}
		}, this.props.speed);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render () {
		return (
			<div style={styles.container}>
				<p style={styles.content}>
					{this.state.text}
				</p>
			</div>
		)
	}
}

Loading.defaultProps = {
		text: 'Loading',
		speed: 300
}

Loading.propTypes = {
	text: PropTypes.string,
	speed: PropTypes.number
}

export default Loading;
