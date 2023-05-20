import React, {useState} from 'react';
import styled from "styled-components";
import BoardRow from './BoardRow';

function GuessBoard({colors, numberOfColors, colorSolution, numberOfGuesses, selectedColor, submitAnswer}) {
  // const guessBoardRows = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth'];
  const [rowIsActive, setRowIsActive] = useState([{id: 1, position: 'first', nextPosition: 'second', rowActive: true}, {id: 2, position: 'second', nextPosition: 'third', rowActive: false}, {id: 3, position: 'third', nextPosition: 'fourth', rowActive: false}, {id: 4, position: 'fourth', nextPosition: 'fifth', rowActive: false}, {id: 5, position: 'fifth', nextPosition: 'sixth', rowActive: false}, {id: 6, position: 'sixth', nextPosition: 'seventh', rowActive: false}, {id: 7, position: 'seventh', nextPosition: 'eigth', rowActive: false}, {id: 8, position: 'eigth', nextPosition: 'ninth', rowActive: false}, {id: 9, position: 'ninth', nextPosition: 'tenth', rowActive: false}, {id: 10, position: 'tenth', nextPosition: 'none', rowActive: false}]);
  const [guessBoardRows, setGuessBoardRows] = useState([{id: 1, position: 'first', nextPosition: 'second', rowActive: rowIsActive[0].rowActive}, {id: 2, position: 'second', nextPosition: 'third', rowActive: rowIsActive[1].rowActive}, {id: 3, position: 'third', nextPosition: 'fourth', rowActive: false}, {id: 4, position: 'fourth', nextPosition: 'fifth', rowActive: false}, {id: 5, position: 'fifth', nextPosition: 'sixth', rowActive: false}, {id: 6, position: 'sixth', nextPosition: 'seventh', rowActive: false}, {id: 7, position: 'seventh', nextPosition: 'eigth', rowActive: false}, {id: 8, position: 'eigth', nextPosition: 'ninth', rowActive: false}, {id: 9, position: 'ninth', nextPosition: 'tenth', rowActive: false}, {id: 10, position: 'tenth', nextPosition: 'none', rowActive: false}]);
  

  return (
    <GuessBoardFull>
    {/* <GlobalStyle /> */}
        {guessBoardRows.slice(0, numberOfGuesses).map(row => {
          return <BoardRow key={row.id} positionName={row.position} nextPosition={row.nextPosition} isActive={row.rowActive} index={row.index} colors={colors} numberOfColors={numberOfColors} colorSolution={colorSolution} selectedColor={selectedColor} guessBoardRows={guessBoardRows} setGuessBoardRows={setGuessBoardRows} rowIsActive={rowIsActive} setRowIsActive={setRowIsActive} submitAnswer={submitAnswer}/>
        })}
    </GuessBoardFull>
  )
}

export default GuessBoard;

// const GlobalStyle = createGlobalStyle`
//     main {
//         overflow-y: hidden;
//     }
// `;

const GuessBoardFull = styled.div`
    /* overflow-y: hidden; */
    background-color: bisque;
    display: flex;
    flex-direction: column-reverse;
`;
