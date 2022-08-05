import React, {useState} from "react";


function Counter(){
    const[count, setCount] = useState(0);
    const plusClick = () => setCount(count + 1)
    const minusClick = () => setCount(count - 1)
    const resetClick = () => setCount(count * 0)

    return(
        <p>
        <p>Count: {count}</p>
        <button id = "minusButton" onClick={minusClick}>Minus</button>
        <button id = "resetButton" onClick={resetClick}>Reset</button>
        <button id = "plusButton" onClick={plusClick}>Plus</button>
        </p>
    )
}

export default Counter;

