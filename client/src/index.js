import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './Provider.js'

ReactDOM.render(
    <Router>
        <Provider>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
