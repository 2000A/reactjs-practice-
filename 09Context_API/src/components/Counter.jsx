import { useState } from "react";

function Counter(){
    const [counter,setCounter] = useState(0)
    function handleCounter(e){
        e.stopPropagation();
        setCounter(counter+1)
        console.log(counter)
    }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={handleCounter}>Add</button>
        </>
    )
}
export default Counter;