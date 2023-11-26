import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemContext } from "./store/todo-items-store";

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

  const defaultToDoItems=[{name:'Buy ghee',dueDate:"today"}]

  return (
    <TodoItemContext.Provider value={[defaultToDoItems]}>
      <center className='todo-container'>
        <AppName/>
        <div className="container text-center">
          <AddToDo onNewItem={handleNewItem}/>
        </div>
        <Welcome todoItems={todoItems}/>
        <ToDoItem todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      </center>
    </TodoItemContext.Provider>
  )
}

export default App;
