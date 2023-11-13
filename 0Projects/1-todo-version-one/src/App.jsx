import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"

function App() {

  return (
    <center class='todo-container'>
      <AppName/>
      <div class="container text-center">
        <AddToDo/>
      </div>

      <ToDoItem/>
    </center>
  )
}

export default App
