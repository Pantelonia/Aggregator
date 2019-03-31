import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {render} from 'react-dom'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


render(
    <Router>
        <App/>
    </Router>
    , document.getElementById('root')
);