import { useState } from "react";

function Counter(){
    
    const [number, setNumber] = useState(0);
 
    function onHandler(e){
        e.stopPropagation();
        console.log("render counter")
        
       
        setNumber(number=>number+1);
        console.log(number)
    }
    return(
        <div>
        <h1 style={{color:'fff'}}>{number}</h1> 
        
        <button onClick={onHandler}>Add</button>
        </div>
    )
}

export default Counter;
