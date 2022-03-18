import MinesweeperBoard from "./minesweeperboard"
import React from "react"

class Minesweeper extends React.Component{

    render() {
        return (<MinesweeperBoard boardwidth={16} boardheight={16} numberofmines={40}></MinesweeperBoard>)}

}


export default Minesweeper