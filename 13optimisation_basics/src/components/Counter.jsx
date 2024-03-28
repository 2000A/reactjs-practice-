import { useRef, useState,useMemo,useCallback } from "react";
function fib(n){ //keeping outside so this function should not become dependency ie. to make it non reactive
    if(n===1 || n=== 2){
        return 1
    }
    return fib(n-1)+fib(n-2) 
  }
function Counter() {
    //as we can see for n>30 calculation takes time if any state changes then we know react components are re-rendered
    //therefore Counter component will re-renders and same calcuation is done again for n=40 that is lagging our application means it requires optimiation
    //optimisation : number which is calculated should be saved not recalucated
    console.log("render counter")
  const [counter, setCounter] = useState(3);
 
  let num = useRef(0); 
  function handleCounter(e) {
    e.stopPropagation();
 

    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);

    
    num.current++;
   
    console.log(num.current);
  }

  //ch.13 useMemo , useCallback , memo
  const funcMemoized = useCallback(function fib(n){//1,1,2,3,5,... where n is position of fibonacci series
    if(n===1 || n=== 2){
        return 1
    }
    return fib(n-1)+fib(n-2) //this will return sum till nth position 
  },[])


 //In this scenario a number is calculated should not be re-calculated again , real life example can be
 //if an array is filtered which has taken time to process we don't want our application upon re-render we will do the same lengthy process instead 
 //we will save it so useMemo hook comes in picture
// useMemo(calculation function(return value of this function is stored out of the component),dependency array)
const fibMemoized = useMemo(()=>funcMemoized(counter),[counter, funcMemoized])//as function fib() is dependent of counter state variable, therefore counter should be our dependency  , passing memoized function

  return (
    <>
      
      <h1>{counter}|{fibMemoized}</h1>
      <button onClick={handleCounter}>Add</button>
    </>
  );
}
export default Counter;



//notes of ch13.
//as we can see fib(n) function is a recurrsive function and as counter i.e, n increases processor takes time for processing 
//conclusion : we want if that number is already calculated then upon re-rendering our fib(n) should not run again 
//why there is need to again do processing for large number if done again( usecasw when we will click on edit it renders the component) if renders then our calculation of fibonacci also occurs
//it should be saved so on next render we can use it.


//reactive elements: dependency array containting dependencies are like variables or functions inside component have 
//will have an affect.
//

//hooks take you outside of component to store things.
//to memoize value use useMemo hook
//to memoize function use  useCallback() hook

//In JS if we declare the a object again and again there refrence changes means they are two separate object in memory
//so since when react renders again all normal varibales and function copied are made which are completely separate from itself i.e, they will be stored in another memory 
//there refrence also changes therefore, if passing function as dependency then one should memoize it as
//the upon re-render new function will be genereated if genereated it will problem then

//and since funcMemoized is momoized using useCallback() hook it will get stored somewhere and whenever come in use
//react will have its refrence where it was stored hooks speciality means no redeclaration
