import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  height: 400px;
  width: 400px;
  background-color: whitesmoke;
  display: flex;
  gap: 5px;
  flex-direction: column;
  .btn {
    background-color: black;
    color: white;
    outline: none;
    border: none;
    height: 40px;
  }
  .btn:hover {
    opacity: 0.7;
    font-style: italic;
  }
`;
export const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
export const GridItems = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 30px;
  color: white;
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
`;
