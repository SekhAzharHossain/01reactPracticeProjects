import { useContext } from "react"
import { TodoItemContext } from "../store/todo-items-store"

function ToDoItem({todoItems,onDeleteClick}){

  const todoItemFromContext=useContext(TodoItemContext);
  // console.log(todoItemFromContext);

  return(
    <>
    {todoItems.map((todoItems)=>(
      <div className="container text-center" key={todoItems}>
      <div className="row">
        <div className="col-6">
          {todoItems.name}
        </div>
        <div className="col-4">
          {todoItems.dueDate}
        </div>
        <div className="col-2">
          <button type="button" 
            className="btn btn-danger"
            onClick={()=>onDeleteClick(todoItems.name)}
          >
              Remove</button>
        </div>
      </div>
      </div>
    ))}
    </>
  )
}
export default ToDoItem