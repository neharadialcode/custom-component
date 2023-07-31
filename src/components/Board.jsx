import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...board];
    if (calculateWinner(board) || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? "X" : "O";
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  // Helper function to calculate the winner
  const calculateWinner = (squares) => {
    // Implementation of winning logic
  };

  const renderSquare = (index) => {
    return <Square value={board[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="bord">
      <div className="board-row">
        <span>{renderSquare(0)}</span>
        <span> {renderSquare(1)}</span>
        <span>{renderSquare(2)}</span>
      </div>
      <div className="board-row">
        <span>{renderSquare(3)}</span>
        <span>{renderSquare(4)}</span>
        <span>{renderSquare(5)}</span>
      </div>
      <div className="board-row">
        <span>{renderSquare(6)}</span>
        <span>{renderSquare(7)}</span>
        <span>{renderSquare(8)}</span>
      </div>
    </div>
  );
};

export default Board;
