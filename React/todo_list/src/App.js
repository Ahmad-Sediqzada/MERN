import React, { useState } from "react";
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length == 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todos, i) => {
      return i !== delIdx
      
    })

    setTodos(filteredTodos);
    
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx == i) {
        todo.complete = !todo.complete;

    }

      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }}>

        <input onChange={(e) => {
          setNewTodo(e.target.value)
        }}
          type="text"
          value={newTodo}
          style={{marginTop: "20px"}}/>
        
        <div>
          <button style={{ marginTop: "10px" , backgroundColor: "blue", color: "white", padding:"10px", borderRadius:"5px"}}>Add</button>
        </div>
        
      </form>

      
      {todos.map((todo, i) => {
        const todoClass = ["bold", "italic"];

        if (todo.complete) {
          todoClass.push("line-through");
        }

        return (
          <div key={i}>
            <span className={todoClass.join(" ")}>{todo.text}</span>

            <input onChange={(e) => {
              handleToggleComplete(i);
            }}
            checked={todo.complete} type="checkbox" />

            <button onClick={(e) => {
              handleTodoDelete(i);
            }}
            style={{marginLeft: "10px", marginTop: "10px"}} 
            >Delete</button>

          </div>
          
        )
      })}
            
    </div>
  );
}

export default App;
