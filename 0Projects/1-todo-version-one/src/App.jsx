import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`new item added:${itemName} Date:${itemDueDate}`)
    const newTodoItems=[...todoItems,{name:itemName, dueDate:itemDueDate},];
    setTodoItems(newTodoItems);
    // console.log(todoItems)
  }

  return (
    <center className='todo-container'>
      <AppName/>
      {}<Welcome/>
      <div className="container text-center">
        <AddToDo onNewItem={handleNewItem}/>
      </div>
      <ToDoItem todoItems={todoItems}/>
    </center>
  )
}

export default App;
