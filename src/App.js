import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';









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

  const [count, setCount] = useState(0)
  

  

  return (
    <div className="App">
      <StyledTable>
        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key= {row}>
            {[1, 2, 3].map((column) => (
              <StyledTd key= {column}>
                <Button count={count} setCount={setCount}>
                  
                </Button> 
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
