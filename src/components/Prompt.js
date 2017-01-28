import React, { PropTypes } from 'react';

const Prompt = (props) => {
	let styles = {
		transparentBg: {
			background: 'transparent'
		}
	}
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Github Username"
							onChange={props.onUpdateUser}
							value={props.username}/>
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button
							className="btn btn-block btn-success"
							type="submit">
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

Prompt.propTypes = {
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired
};

export default Prompt;
