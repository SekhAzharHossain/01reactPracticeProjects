import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Fooditems from './components/Fooditmes';
import Errormessage from './components/Errormessage';

function App() {

  const foodItems=['dal','Green Vegetable','Roti','Salad','Milk'];

  return (
    <>
      <h1>Healthy Food</h1>
      <Errormessage items={foodItems}/>
      <Fooditems items={foodItems}/>
    
    </>
  );
};

export default App;
