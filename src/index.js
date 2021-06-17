import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';   //import for routing

import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); //wrap App in browser router
