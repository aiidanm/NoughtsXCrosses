import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import styled from 'styled-components'
import React from 'react';

const StyledDiv = styled.div`
  color: black;
  font-size: 3rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span{position:absolute;}

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
          {[1, 2, 3].map((row) => (
            <tr key= {row}>
            {[1, 2, 3].map((column) => (
              <StyledTd key= {column}>
              <StyledDiv>
                <span>
                  X
                </span>
                </StyledDiv>
              </StyledTd>

            ))}
            </tr>
            
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}




export default App;
