import { useState } from "react";

function AddToDo({onNewItem}){

  const [todoName,setTodoName]=useState();
  const [dueDate,setDueDate]=useState();

  const handleNameChange=(event)=>{
    // console.log(typeof(event.target.value));
    setTodoName(event.target.value);
  };

  const handleDateChange=(event)=>{
    // console.log(typeof(event.target.value));
    setDueDate(event.target.value);
  };

  const hangleOnButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }

    return(
        <div className="row">
          <div className="col-6">
            <input type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date"
              value={dueDate}
              onChange={handleDateChange}
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