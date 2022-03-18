import MinesweeperTile, { mstilestate, mstiletype } from "./minesweepertile"
type MinesweeperBoardProps = {
    boardwidth: any,
    boardheight: any,
    numberofmines: any

}

const MinesweeperBoard: React.FC<MinesweeperBoardProps> = (props) => {
    let board: any[] = [];
    let game: any[] = [];

    for (let i = 0; i < props.boardheight; i++) {

        let row = [];
        for (let j = 0; j < props.boardwidth; j++) {
            row.push({ type: mstiletype.Blank, adjacent: 0, x: j, y: i });
        }
        game.push(row);
    }

    let activemines: any[] = [];

    for (let i = 0; i < props.numberofmines; i++) {
        var findingcandidate = true;
        while (findingcandidate) {
            var xCandidate = Math.floor(Math.random() * props.boardwidth);
            var yCandidate = Math.floor(Math.random() * props.boardheight);
            if (game[xCandidate][yCandidate].type != mstiletype.Mine) {
                game[xCandidate][yCandidate].type = mstiletype.Mine;
                activemines.push({ x: xCandidate, y: yCandidate });
                //figure out how many adjacent mines
                if (xCandidate > 0) game[xCandidate - 1][yCandidate].adjacent++;
                if (yCandidate > 0) game[xCandidate][yCandidate - 1].adjacent++;
                if (xCandidate < props.boardwidth - 1) game[xCandidate + 1][yCandidate].adjacent++;
                if (yCandidate < props.boardheight - 1) game[xCandidate][yCandidate + 1].adjacent++;

                //props.boardheight-1
                findingcandidate = false;
            }
        }
    }

    let rows: any[] = []
    game.forEach((row, index) => {
        // Create board columns
        const cols = row.map((column: any, index: number) => <MinesweeperTile adjacent={column.adjacent} type={column.adjacent} col={column.x} row={column.y} key={index} />);
        rows.push(<div className="ms-board__row" key={index}>{cols}</div>)
    })

    // for (let i = 0; i < props.boardheight; {
    //     let row = [];
    //     for (let j = 0; j < props.boardwidth; {
    //         row.push(() => <MinesweeperTile col={j} row={i} adjacent={0} />);
    //     }
    //     board.push(row);
    // }
    //use effect on button click to see if you win

    return (
        <div className="ms-board__board">
            {rows}
        </div>
    )
}

export default MinesweeperBoard