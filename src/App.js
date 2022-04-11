import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: blue;
`;

function App() {




  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <td>
            <StyledDiv>1</StyledDiv>
          </td>
          <td>
            <div>2</div>
          </td>
          <td>
            <div>3</div>
          </td>
        </tr>

        <tr>
          <td>
            <div>1</div>
          </td>
          <td>
            <div>2</div>
          </td>
          <td>
            <div>3</div>
          </td>
        </tr>

        <tr>
          <td>
            <div>1</div>
          </td>
          <td>
            <div>2</div>
          </td>
          <td>
            <div>3</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}




export default App;
