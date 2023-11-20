import { useState } from "react";
import Items from "./Items";

// const handleBuyButtonClicked=(event,Items)=>{
//   console.log(event);
//   console.log(`${Items} being bought`);
// };

const Fooditems=({items})=>{

  let [activeItems,setActiveItems]=useState([]);

  let onBuyButton =(items,event)=>{
    let newItems=[...activeItems,items];
    setActiveItems(newItems);
  }

    return(
        <ul className="list-group list-group-flush">
          {items.map((items)=>(
            <Items key={items} 
            Items={items} bought={activeItems.includes(items)} 
            handleBuyButtonClicked={(event)=>onBuyButton(items,event)}/>
          ))}
        </ul>

    );
   
};

export default Fooditems;