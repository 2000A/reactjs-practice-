import { useRef, useState } from "react";

function Counter(){
    const [counter,setCounter] = useState(0)
    //useRef lecture : i want to check how many times does this handleCounter has runned (in console) means i need to store
    //it somewhere since, this is for console we should not relate it with state right.
    
    // let num = 0;//not working
    let num = useRef(0)//useRef is always an object so initial value i.e., 0 gets stored inside num's object as property the name of property is num: {current: 0}

    function handleCounter(e){
        e.stopPropagation();
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)

        //if we will not change the state then component will not render but our num value kept increasing 
        // setCounter(counter=>counter+1)
        // setCounter(counter=>counter+1)
        // setCounter(counter=>counter+1)
        
        // num++
        num.current++
        // console.log(num)//printing 1 only because when state changed component renders again so num again initialised to 0
        //therefor how will i store normal variable when component render
        console.log(num.current);
    }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={handleCounter}>Add</button>
        </>
    )
}
export default Counter;

//ref never re-renders it just stores the value 
//ref cannot be used in place of state
//esi koi bhi cheese jiska state se koi lena nahi hai but still we want to keep record of that variable(something)
//and current is the property name of ref object i.e, num

//part 2:
//ref was discovered only for storing DOM elements
//To access DOM api useRef hook is used and is only made for