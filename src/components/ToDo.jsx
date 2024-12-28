import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  let [todoList, setTodoList] = useState([]);

  let saveToDo = (event) => {
    event.preventDefault();

    let todoInp = event.target.todoInp.value;
    alert(todoInp);
    if (!todoList.includes(todoInp)) {
      let finalDolist = [...todoList, todoInp];
      setTodoList(finalDolist);
    } else {
      alert("Todo Already exist");
    }
  };

  let list = todoList.map((value, index) => {
    return <ToDOListItems todo={value} key={index} />;
  });

  return (
    <div className="formDiv">
      <form onSubmit={saveToDo}>
        <input type="text" name="todoInp" placeholder="Enter your To-DO." />{" "}
        <button>Add</button>
      </form>
      <div className="todoListDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

function ToDOListItems(props) {
  return (
    <li>
      {props.todo} <span>&times;</span>
    </li>
  );
}

export default ToDo;
