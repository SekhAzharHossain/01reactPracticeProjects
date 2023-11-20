import { useState } from "react";
import Calculator from "./components/Calculator"
import Heading from "./components/Heading";

function App() {

  let [displayResult,setDisplayResult]=useState("");

  const handleOnClick=(event)=>{
    let a=event.target.innerText;
    let result;
    if(a=='='){
      a='';
      try {
        const result = eval(displayResult);
        setDisplayResult(result.toString()); // Convert the result to a string for display
      } catch (error) {
        setDisplayResult("Error");
      }
    }
    else if(a==='clr'){
      a='';
      setDisplayResult('');
    }
    else{
      setDisplayResult(displayResult+a);
      console.log(result);
    }
  };

  return (
    <>
      <Heading/>
      <Calculator handleOnClick={handleOnClick} displayResult={displayResult}/>
    </>
  )
}

export default App;
