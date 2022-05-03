import {useState} from 'react';
import React from 'react';
import styled from 'styled-components';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const StyledDiv = styled.div`
  color: black;
  font-size: 3rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span{position:absolute;}

`;

function Button({ count, setCount }) {
    const [entry, setEntry] = useState("")
    const [isDisabled, setIsdisabled] = useState(false)
    const handleClick = () => {
        console.log(isDisabled)
        if(isDisabled) return;
        count % 2 == 0 ? setEntry("X") : setEntry("O")
        console.log("Clicked");
        setCount(count + 1);
        console.log(count);
        setIsdisabled(true);
      }



return (
    <StyledDiv onClick={handleClick}>
        <span>
            {entry}
        </span>
    </StyledDiv>
)
}
export default Button;