import React from 'react'
import styled, {createGlobalStyle} from 'styled-components';


function Header() {
  return (
    <>
    <GlobalStyle />
    <header>
        <h1>Code Breaker</h1>
    </header>
    </>
  )
};


export default Header;

const GlobalStyle = createGlobalStyle`
    header {
        height: 45px;
        background-color: rgba(100,100,100);
        display: flex;
        flex-direction: column;
    }
    header > h1 {
        text-align: center;
        margin: auto;
    }
`;