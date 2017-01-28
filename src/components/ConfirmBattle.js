import React, { PropTypes } from 'react';

const ConfirmBattle = (props) => {
	return props.isLoading === true ? <p>LOADING!!</p> : <p>{props.header}</p>
}

ConfirmBattle.propTypes = {
	header: PropTypes.string.isRequired
};

export default ConfirmBattle;
