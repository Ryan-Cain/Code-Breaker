import React from 'react';
import styled from "styled-components";

function ColorOptions({colors, numberOfColors, resetSolution, selectedColor, setSelectedColor}) {
    

    function changeClass(e) {
        const activeColor = e.target.id;
        setSelectedColor(activeColor);
        // console.log(selectedColor);
    }
    
  return (
    
    <ColorBar>
    <Colors>
        {colors.slice(0, numberOfColors).map((color, index) => {
            return <span key={index}>
                <div className={color === selectedColor ? 'selected' : ''} onClick={changeClass} style={{backgroundColor: color}} id={color}>
                </div>
            </span> 
        })}
    </Colors>
    
    <button onClick={resetSolution}>Generate</button>
    </ColorBar>
  )
}

export default ColorOptions;


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
    .selected {
        border: 4px solid white;
    }
`;

const ColorBar = styled.div`
    display: flex;
    height: 40px;
    margin: 10px;
    > button {
        height: 100%;
        width: 100px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: auto;
        margin-left: 30px;
    }
`;