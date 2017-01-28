import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import routes from './config/routes';


ReactDOM.render(
  routes,
  document.getElementById('root')
);
