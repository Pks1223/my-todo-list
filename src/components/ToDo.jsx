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

  return (
    <div>
      <form onSubmit={saveToDo}>
        <input type="text" name="todoInp" placeholder="Enter your To-DO." />{" "}
        <button>Add</button>
      </form>
      <div>
        <ul>
          <li>
            HTML <span>&times;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
