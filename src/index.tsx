///
// src/index.tsx

// Import React and ReactDOM
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Import Tetris component

// Import service worker
// import * as serviceWorker from './serviceWorker'

// import './index.css';
import Home from './components/app/Home';
import Tetris from './components/tetris/tetris'
import Minesweeper from './components/minesweeper/minesweeper'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/app/header'
// Import styles
import './styles/minesweeper.css'
import './styles/tetris.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tetris" component={()=> <Tetris boardWidth="14" boardHeight="20"/>} />
                    <Route exact path="/minesweeper" component={()=> <Minesweeper/>} />
                </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()