import React, { useEffect, useState } from "react";
import Squares from "./components/squares";
import { MainContainer, Row, Board } from "./style/boardstyle";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [palyer, setPlayer] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(board);
    if (strings[index]) return;
    strings[index] = palyer ? "X" : "0";
    setPlayer(!palyer);
    setBoard(strings);
  };

  const clearGame = () => {
    setBoard(["", "", "", "", "", "", "", "", "", ""]);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`${winner} won the Game !`);
    }
  }, [board]);

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
    console.log(board[0], board[1], board[2]);
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
      <Board>
        <Row>
          <Squares onClick={() => onUserClicked(0)} state={board[0]} />
          <Squares onClick={() => onUserClicked(1)} state={board[1]} />
          <Squares onClick={() => onUserClicked(2)} state={board[2]} />
        </Row>
        <Row>
          <Squares onClick={() => onUserClicked(3)} state={board[3]} />
          <Squares onClick={() => onUserClicked(4)} state={board[4]} />
          <Squares onClick={() => onUserClicked(5)} state={board[5]} />
        </Row>
        <Row>
          <Squares onClick={() => onUserClicked(6)} state={board[6]} />
          <Squares onClick={() => onUserClicked(7)} state={board[7]} />
          <Squares onClick={() => onUserClicked(8)} state={board[8]} />
        </Row>
        <button className="btn" onClick={clearGame}>
          Clear Game
        </button>
      </Board>
    </MainContainer>
  );
}

export default App;
