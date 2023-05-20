import React from 'react';
import styled from "styled-components";

function GuessPegs({correctColorOnly, correctPlaceAndColor}) {
  return (
    <GuessPegsFull>
        {correctPlaceAndColor.map((color, index) => {
          return <div key={index} className='lightgray' style={{backgroundColor: "black"}}></div>
        })}
        {correctColorOnly.map((color, index) => {
          return <div key={index} className='lightgray' style={{backgroundColor: "darkgray"}}></div>
        })}
    </GuessPegsFull>
  )
}

export default GuessPegs;

const GuessPegsFull = styled.div`
  width: 100px;
  height: 100%;
  /* background-color: aliceblue; */
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

`;