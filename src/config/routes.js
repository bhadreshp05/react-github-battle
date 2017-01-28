import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';

let routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='playerOne' header='Player One' component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
			<Route path='battle' header='Confirm Battle' component={ConfirmBattleContainer} />
		</Route>
	</Router>
);

export default routes;
