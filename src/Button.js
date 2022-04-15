import {useState} from 'react';
import React from 'react';


function Button({ text }) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        console.log("Clicked");
        setCount(count + 1);
        console.log(count);
    
      }


return (
    <button onClick={handleClick} className={count % 2 == 0 ? "bluebutton" : "redbutton"}>{text}</button>
)
}
export default Button;