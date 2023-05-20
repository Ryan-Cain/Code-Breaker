import React, {useState} from 'react';
import styled from "styled-components";
import GuessPegs from './GuessPegs';

function BoardRow({colors, numberOfColors, positionName, nextPosition, isActive, colorSolution, selectedColor, guessBoardRows, setGuessBoardRows, rowIsActive, setRowIsActive, submitAnswer}) {
    
    const [rowGuess, setRowGuess] = useState(['gray','gray','gray','gray']);
    const [correctColorOnly, setCorrectColorOnly] = useState([]);
    const [correctPlaceAndColor, setCorrectPlaceAndColor] = useState([]);
    let solutionGenerated;
    
    // if (submitAnswer === true) {
    //     checkAnswer();
    // } 
    
    function addGuess(e) {
        if (colorSolution.length > 1) {
            solutionGenerated = true;
        } else {
            solutionGenerated = false;
        }
        if (!selectedColor || solutionGenerated === false) {
            return;
        } else if (isActive) {
            const newGuessArray = [...rowGuess];
            newGuessArray[e.target.id] = selectedColor;
            setRowGuess(newGuessArray);
        } else {
            return;
        }
    }

    function checkAnswer() {
        let rowGuessArray = [...rowGuess];
        let rowGuessArrayHold = [];
        let colorSolutionArray = [...colorSolution];
        let colorSolutionArrayHold = [];
        let usedCorrectPlaceAndColor = [];
        let usedCorrectColorOnly = [];
        let noPlaceOrColor = [];
        let usedSolution = [];
        let allSelectedTrue = true;
        // let gray;
        rowGuessArray.forEach(guess => {
            if (guess === 'gray') {
                allSelectedTrue = false;
            }
        });
        if (!isActive || allSelectedTrue === false) {
          return;
        }
        for (let i = 0; i < numberOfColors; i++) {
          if (rowGuessArray[i] === colorSolutionArray[i]) {
            usedCorrectPlaceAndColor.push(rowGuessArray[i]);
            usedSolution.push(colorSolutionArray[i]);
            console.log(usedCorrectPlaceAndColor + i)
          } else {
            rowGuessArrayHold.push(rowGuessArray[i]);
            colorSolutionArrayHold.push(colorSolutionArray[i]);
          }
        }

        rowGuessArrayHold.forEach(guess => {
            let g =0;
            while (g < colorSolutionArrayHold.length) {
                if (guess === colorSolutionArrayHold[g]) {
                    usedCorrectColorOnly.push(rowGuessArrayHold[g]);
                    usedSolution.push(colorSolutionArrayHold[g]);
                    g++;
                    return;
                } else {
                    g++;
                }
            }
             if (g === colorSolutionArrayHold.length && guess !== colorSolutionArrayHold[g] ){
                noPlaceOrColor.push(rowGuessArrayHold[g]);
            }
        })
        setCorrectColorOnly(usedCorrectColorOnly);
        setCorrectPlaceAndColor(usedCorrectPlaceAndColor);
        moveToNextRow(positionName, nextPosition, guessBoardRows);
        console.log('usedCorrectPlaceAndColor = ' + usedCorrectPlaceAndColor);
        console.log('usedCorrectColorOnly = ' + usedCorrectColorOnly);
        console.log('usedSolution = ' + usedSolution);
      }
    
      function moveToNextRow(currentPosition, nextPosition, guessBoardRows) {
        let newGuessBoardArray = [];
        let curr = guessBoardRows.find(board => {
            return board.position === currentPosition;
        });
        curr.rowActive = false;
        let next = guessBoardRows.find(board => {
            return board.position === nextPosition;
        });
        console.log(next);
        next.rowActive = true;
        guessBoardRows.forEach((board, index) => {
            if (board.position === currentPosition) {
                newGuessBoardArray.push(curr);
            } else if (board.position === nextPosition) {
                newGuessBoardArray.push(next);
            } else {
                newGuessBoardArray.push(board);
            }
        });
        setRowIsActive(newGuessBoardArray);
        // why does this even work with setRowIsActive?? shouldnt it be setGuessBoardRows?
      }

    
    return (
    <Row>
    <Colors>
        {rowGuess.slice(0, numberOfColors).map((guess, index) => {
            return <span key={index}>
                <div style={{backgroundColor: guess}} id={index} color={guess} onClick={addGuess}>
                </div>
            </span> 
        })}
    </Colors>
    <GuessPegs correctPlaceAndColor={correctPlaceAndColor} correctColorOnly={correctColorOnly}/>
    <button onClick={checkAnswer}></button>
    </Row>
  )
}

export default BoardRow;


const Colors = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    > span {
        /* width: 25px; */
        flex-grow: 1;
        height: 100%;
        margin: auto;
    }
    > span > div {
        border-radius: 50%;
        height: 100%;
        width: 40px;
        margin: auto;
        border: 4px solid black;
    }
`;

const Row = styled.div`
    display: flex;
    height: 40px;
    margin: 10px;
    > button {
        height: 100%;
        width: 40px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: auto;
    }
`;