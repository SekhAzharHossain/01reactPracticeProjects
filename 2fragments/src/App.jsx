import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Errormessage from './components/Errormessage';
import Fooditems from './components/Fooditmes';
import Container from './components/Container';
import Foodinput from './components/Foodinput';

function App() {

  const [textState,setTextState]=useState("Food Item Entered by user");

  const [foodItems,setFoodItems]=useState([]);

  const [bgColor,setBgColor]=useState();

  // const foodItems=['dal','Green Vegetable','Roti','Salad','Milk'];
  // let textToShow="Food Item Entered By User"

  const handleOnKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newFoodItem= event.target.value;
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems)
      // console.log(newFoodItem);
    }

    // setTextState(event.target.value);
  }

  return (
    <>
    <Container>
      <h1>Healthy Foods</h1>
      <Foodinput handleOnKeyDown={handleOnKeyDown}/>
      {/* <p>{textState}</p> */}
      <Errormessage items={foodItems}/>
      <Fooditems items={foodItems}/>
    </Container>
    {/* <Container>
      <p>These above foods are very healthy. Just with a click you can order these</p>
    </Container> */}
    </>
  )
}

export default App;
