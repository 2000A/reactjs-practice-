import { useState } from "react";

function Counter(){
    //let number = 0;//local variable : react allows updation of this variable but this updation will not be refleced in UI
    const [number, setNumber] = useState(0);//a state variable , gets stored somewhere in global memory which helps react remember and helps in changes reflect in UI
    //number : state and setNumber : setter method , above thing is array destructring
    function onHandler(e){
        e.stopPropagation();
        console.log("render counter")
        
       // number++;//now no need of this 
        // setNumber(number+1);//(straight forward style) everyone is doing the same thing that is set to 1 
        // setNumber(number+1);//as all numbers are holding the same value i.e, 0
        // setNumber(number+1);//and in react all will be processed in a batch 
        // setNumber(number+1);//its a react feature 
        // setNumber(number+1);
        // setTimeout(()=> setNumber(number+1), 4000)//concept in multiple clicking 
        //********* */
        // setNumber(number=>number+1);//because of updater function style  0+1
        // setNumber(number=>number+1);//abh yeh bhi batches mein hi run hote hai but react abh inhe as a queue ke jese dekhta hai toh sare previous values of number gets added for next value 1+1
        // setNumber(number=>number+1);//2+1
        // setNumber(number=>number+1);//3+1
        setNumber(number=>number+1);//final ans is 5 because react solves this in quque(more research on event)
        console.log(number)//ab batao ki yeh updated kyun nahi dikha raha in console because its return after setNumber line(as setter function is aysynchronous it runs after all lines of code gets executed in handler function)
    }
    return(
        <div>
        <h1 style={{color:'fff'}}>{number}</h1> {/* here reflection of updated number should be seen on UI  */}
        
        <button onClick={onHandler}>Add</button>
        </div>
    )
}

export default Counter;

//function is running everytime and it's not that the useState always gets assigned to 0 because it remembers old value

//when i like a post it get incremented once like only even if i will multiple click on it its state does not get affected (multiple like option ho toh alag baat hai)
//

//ek our cheese ki state updatation ka kaam react asynchronously karta hai pehle handleClick() function ke sare kaam hone ke baad(i.e,after execution of all statements)

//depending on need we can use straight forward style (when we want to stop a user) or updater function style(allowing user for multiple inputs)