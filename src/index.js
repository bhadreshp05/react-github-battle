import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const USER_DATA = {
	name: 'Bhadresh Patel',
	userName: 'bhadreshp05',
	image: 'https://avatars3.githubusercontent.com/u/7990348?v=3&s=460'
}

ReactDOM.render(
  <App user={USER_DATA} />,
  document.getElementById('root')
);
