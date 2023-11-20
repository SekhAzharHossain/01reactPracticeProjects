import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
    // console.log(`new item added:${itemName} Date:${itemDueDate}`)
    const newTodoItems=[...todoItems,{name:itemName, dueDate:itemDueDate},];
    setTodoItems(newTodoItems);
    // console.log(todoItems)
  };

  const handleDeleteItem = (todoItemName) =>{
    const newToDoItems=todoItems.filter(item=>item.name !== todoItemName);
    setTodoItems(newToDoItems);
    // console.log(`Item Deleted :${todoItemName}`)
  }

  return (
    <center className='todo-container'>
      <AppName/>
      <div className="container text-center">
        <AddToDo onNewItem={handleNewItem}/>
      </div>
      {todoItems.length===0 && <Welcome/>}
      <ToDoItem todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  )
}

export default App;
