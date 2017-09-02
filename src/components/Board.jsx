import React from "react";

const Board = (props) => {
  return(
    <div className="board">
      <div className="board__grid">
        {props.board.map(row=>
          <div className="row">
          {row.map(cell=> {
            if (cell) {
              return(<div className="cell">{cell}</div>)
            } else {
              return(<div className="cell">-</div>)
            }
          })}
          </div>
        )}
      </div>
    </div>
  )
};

export default Board;