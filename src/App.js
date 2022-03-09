import React, { useEffect, useState } from "react";
import Squares from "./components/squares";
import { MainContainer, Row, Board } from "./style/boardstyle";

function App() {
  const [text, setWinner] = useState("");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("0");

  const onSquareClick = (index) => {
    let strings = Array.from(board);
    if (strings[index]) {
      return;
    }
    // conditon for each player's turn.
    strings[index] = player ? "X" : "0";
    setPlayer(!player);
    setBoard(strings);
  };

  const clearGame = () => {
    setBoard(["", "", "", "", "", "", "", "", "", ""]);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      clearGame();
      // alert(`${winner} won the Game !`);
      const win = () => {
        setWinner(winner);
      };
    }
  });

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // console.log(board[0], board[1], board[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <MainContainer>
      <p></p>
      <Board>
        <Row>
          <Squares onClick={() => onSquareClick(0)} state={board[0]} />
          <Squares onClick={() => onSquareClick(1)} state={board[1]} />
          <Squares onClick={() => onSquareClick(2)} state={board[2]} />
        </Row>
        <Row>
          <Squares onClick={() => onSquareClick(3)} state={board[3]} />
          <Squares onClick={() => onSquareClick(4)} state={board[4]} />
          <Squares onClick={() => onSquareClick(5)} state={board[5]} />
        </Row>
        <Row>
          <Squares onClick={() => onSquareClick(6)} state={board[6]} />
          <Squares onClick={() => onSquareClick(7)} state={board[7]} />
          <Squares onClick={() => onSquareClick(8)} state={board[8]} />
        </Row>
        <button className="btn" onClick={clearGame}>
          Clear Game
        </button>
      </Board>
    </MainContainer>
  );
}

export default App;
