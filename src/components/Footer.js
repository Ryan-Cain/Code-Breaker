import React from 'react';
import styled from "styled-components";
import ColorOptions from './ColorOptions';
import ColorSolution from './ColorSolution';


function Footer({colors, numberOfColors, resetSolution, colorSolution, selectedColor, setSelectedColor, handleClickForSubmit}) {
  return (
    <Guess>
        <ColorSolution colorSolution={colorSolution} />
        <ColorOptions colors={colors} numberOfColors={numberOfColors} resetSolution={resetSolution} selectedColor={selectedColor} setSelectedColor={setSelectedColor} handleClickForSubmit={handleClickForSubmit}/>
    </Guess>
  )
}

export default Footer;

const Guess = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* margin: 1px; */
  /* height: 150px; */
  background-color: rgba(100,100,100);
`;
// const ButtonOptions = styled.div`

// `;

