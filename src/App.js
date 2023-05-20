import {useState} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GuessBoard from "./components/GuessBoard";
import { useEffect } from "react";

function App() {
  let numberOfGuesses = 8;
  let numberOfColors = 4;
  const colors = ['green', 'blue', 'yellow', 'red'];
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorSolution, setColorSolution] = useState([]);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  

  function resetSolution() {
    setColorSolution([]);
    for (let i = 0; i < numberOfColors; i++) {
      const randoNumber = Math.floor(Math.random() * numberOfColors);
      setColorSolution((prev) => {
        return [...prev, colors[randoNumber]
      ]});
      // console.log('color solution in APP is' + colorSolution)
    }
  }
  useEffect(() => {
    console.log('color solution in APP is', colorSolution);
  }, [colorSolution]);

  function handleClickForSubmit() {
    setSubmitAnswer(true);
    setTimeout(() => {
    setSubmitAnswer(false);
    }, 1000);
  }

  

  return (
    <MainDiv className="App">
      <Header />
      <GuessBoard colors={colors} numberOfColors={numberOfColors} colorSolution={colorSolution} numberOfGuesses={numberOfGuesses} selectedColor={selectedColor} submitAnswer={submitAnswer}/>
      <Footer colors={colors} numberOfColors={numberOfColors} resetSolution={resetSolution} colorSolution={colorSolution} selectedColor={selectedColor} setSelectedColor={setSelectedColor} handleClickForSubmit={handleClickForSubmit}/>
    </MainDiv>
  );
}


  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 625px;
    width: 400px;
  `;


export default App;