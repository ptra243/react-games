import React, { Component } from 'react';

class AppHome extends Component {
    render() {
        return <>
            <ul><li>
                <a href="/tetris">Tetris</a></li>
                <li>
                    <a href="/minesweeper">Minesweeper</a>
                </li>
            </ul>
        </>
    }
}

export default AppHome;