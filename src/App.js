import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import styled from 'styled-components'
import React from 'react';

const StyledDiv = styled.div`
  color: black;
  font-size: 9rem;
  padding: 2rem;
`;

const CenterdDiv = styled.div`
  text-align: center;
`;

const StyledTd = styled.td`
border: 3px solid blue;

`;

const StyledTable = styled.table`
  border-spacing: 0px;
  margin: 0 auto;
`;

function App() {




  return (
    <div className="App">
      <StyledTable>
        <tbody>
        <tr>
          <StyledTd>
            <StyledDiv>1</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>2</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>3</StyledDiv>
          </StyledTd>
        </tr>

        <tr>
          <StyledTd>
            <StyledDiv>1</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>2</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>3</StyledDiv>
          </StyledTd>
        </tr>

        <tr>
          <StyledTd>
            <StyledDiv>1</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>2</StyledDiv>
          </StyledTd>
          <StyledTd>
            <StyledDiv>3</StyledDiv>
          </StyledTd>
        </tr>
        </tbody>
      </StyledTable>
    </div>
  );
}




export default App;
