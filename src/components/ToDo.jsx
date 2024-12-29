import React, { useState } from "react";
import "./ToDo.css";

function ToDo({formDiv}) {
  let [todoList, setTodoList] = useState([]);

  let saveToDo = (event) => {
    event.preventDefault();

    let todoInp = event.target.todoInp.value;
    if(todoInp === "") return;
    // alert(todoInp);
    if (!todoList.includes(todoInp)) {
      let finalDolist = [...todoList, todoInp];
      setTodoList(finalDolist);
    } else {
      alert("Todo Already exist");
    }
  };

  let list = todoList.map((value, index) => {
    return <ToDOListItems todo={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>;
  });

  return (
    <div className="formDiv">
      <form onSubmit={saveToDo} style={formDiv?{display:"flex"}:{display:"none"}}>
        <input type="text" name="todoInp" placeholder="Enter your To-Do Task." />
        <button>Add</button>
      </form>
      <div className="todoListDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

function ToDOListItems({todo, indexNumber, todoList, setTodoList}) {
  let [status, setStatus] = useState(false);
  let deleteToDo = () => {
    let finalToDolist = todoList.filter((v,i)=>i!=indexNumber);
    setTodoList(finalToDolist);
  }
  let checkStatus = () => {
    setStatus(!status);
  }
  return (
    <li className={(status)? "completedToDo" : ""} onClick={checkStatus}>
      {todo} <span onClick={deleteToDo}>&times;</span>
    </li>
  );
}

export default ToDo;