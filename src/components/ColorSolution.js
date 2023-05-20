import React from 'react';
import styled from "styled-components";

function ColorSolution({colorSolution}) {
    
  return (
    <ColorBar>
    <ColorSolutionFull>
        {colorSolution ? colorSolution.map((color, index) => {
            return <span key={index}>
                <div style={{backgroundColor: color}}>
                </div>
            </span> 
        }) : null}
    </ColorSolutionFull>
    
    </ColorBar>
  )
}

export default ColorSolution;


const ColorSolutionFull = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin-right: 110px;
    > span {
        /* width: 25px; */
        flex-grow: 1;
        height: 100%;
    }
    > span > div {
        border-radius: 50%;
        height: 100%;
        width: 40px;
        margin: auto;
        border: 4px solid black;
    }
`;

const ColorBar = styled.div`
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