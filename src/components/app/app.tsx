import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Tetris from '../tetris/tetris'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './header'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <div id="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tetris" render={() => (<><Tetris boardWidth="14" boardHeight="20" /></>, document.getElementById('.container'))} />
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
