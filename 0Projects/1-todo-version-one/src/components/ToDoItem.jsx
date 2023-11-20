function ToDoItem({todoItems}){

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
          <button type="button" className="btn btn-danger">Remove</button>
        </div>
      </div>
      </div>
    ))}
    </>
  )
}
export default ToDoItem