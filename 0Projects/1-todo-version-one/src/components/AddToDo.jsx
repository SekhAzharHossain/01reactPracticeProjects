import { useState ,useRef } from "react";

function AddToDo({onNewItem}){
  const newTodoName=useRef();
  const newDueDate=useRef();


  const hangleOnButtonClicked=()=>{
    let todoName=newTodoName.current.value;
    let dueDate=newDueDate.current.value;
    newTodoName.current.value="";
    newDueDate.current.value="";
    onNewItem(todoName,dueDate);
  }

    return(
        <div className="row">
          <div className="col-6">
            <input type="text"
              ref={newTodoName}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date"
              ref={newDueDate}
            />
          </div>
          <div className="col-2">
          <button type="button" 
            className="btn btn-success"
            onClick={hangleOnButtonClicked}
          >
            Add</button>
          </div>
        </div>
    )
}

export default AddToDo;