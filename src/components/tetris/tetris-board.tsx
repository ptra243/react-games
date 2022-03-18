///
// src/components/tetris-board.tsx

// Import React
import React, { useEffect } from 'react'

// Define props for TetrisBoard component
type TetrisBoardProps = {
  field: any[],
  gameOver: boolean,
  score: number,
  level: number,
  rotate: number,
  nextTile: number[][][],
  nextTileType: number,
  nextField: any[]
}

// Create TetrisBoard component
const TetrisBoard: React.FC<TetrisBoardProps> = (props) => {
  // Create board rows
  let rows: any[] = []

  let nextPieceRow: any[] = [];

  //create 4x4 grid
  props.nextField.forEach((row, index) => {
    const cols = row.map((column: any, index: number) => <div className={`col-tetris-${column}`} key={index} />)
    nextPieceRow.push(<div className="tetris-board__row" key={index}>{cols}</div>);
  });

  useEffect(() => {

    props.nextField.forEach((row) => {
      row.forEach((element:number, index: number) => {
        row[index] = 0;
      });
    });
    var rotate = 0;
    props.nextField[1 + props.nextTile[rotate][0][1]][1 + props.nextTile[rotate][0][0]] = props.nextTileType
    props.nextField[1 + props.nextTile[rotate][1][1]][1 + props.nextTile[rotate][1][0]] = props.nextTileType
    props.nextField[1 + props.nextTile[rotate][2][1]][1 + props.nextTile[rotate][2][0]] = props.nextTileType
    props.nextField[1 + props.nextTile[rotate][3][1]][1 + props.nextTile[rotate][3][0]] = props.nextTileType
  }, [props.nextTile, props.nextTileType, props.nextField]);

  props.field.forEach((row, index) => {
    // Create board columns
    const cols = row.map((column: any, index: number) => <div className={`col-tetris-${column}`} key={index} />)
    rows.push(<div className="tetris-board__row" key={index}>{cols}</div>)
  })


  return (
    <div className="tetris-board">
      {/* Game info */}
      <div className="tetris-board__info">
        <p>Next Piece:</p>
        <div className="tetris-board__board">
          {nextPieceRow}
        </div>
        <p className="tetris-board__text">Level: {props.level}</p>

        <p className="tetris-board__text">Score: {props.score}</p>

        {props.gameOver && <p className="tetris-board__text"><strong>Game Over</strong></p>}
      </div>

      {/* Game board */}
      <div className="tetris-board__board">{rows}</div>
    </div>
  )
}

export default TetrisBoard