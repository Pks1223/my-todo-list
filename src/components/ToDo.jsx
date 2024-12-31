import React, { useState, useRef, useEffect } from "react";
import "../styles/ToDo.css";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";

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
    return <ToDoListItems todo={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>;
  });

  return (
    <div className="formDiv">
      <form onSubmit={saveToDo} className={formDiv? "":"hide"}>
      {/* <form onSubmit={saveToDo} style={formDiv?{display:"flex"}:{display:"none"}}> */}
        <textarea rows="4"  type="text" name="todoInp" placeholder="Enter your To-Do Task." />
        <button>Add</button>
      </form>
      <div className="todoListDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

function ToDoListItems({ todo, indexNumber, todoList, setTodoList }) {
  const [status, setStatus] = useState(false);
  const [editToDoList, setEditToDoList] = useState(false);
  const pRef = useRef(null); // Create a ref for the <p> tag

  const editToDo = () => {
    setEditToDoList((prev) => !prev);
  };

  const deleteToDo = () => {
    const finalToDoList = todoList.filter((_, i) => i !== indexNumber);
    setTodoList(finalToDoList);
  };

  const checkStatus = () => {
    setStatus((prev) => !prev);
  };

  const handleEdit = (e) => {
    if (!editToDoList) {
      const updatedList = [...todoList];
      updatedList[indexNumber] = e.target.innerText;
      setTodoList(updatedList);
    }
  };

  useEffect(() => {
    if (editToDoList && pRef.current) {
      pRef.current.focus(); // Focus the <p> tag when contentEditable is true
    }
  }, [editToDoList]);

  return (
    <li
      className={`${status ? "completedToDo" : ""} ${editToDoList ? "editToDoList" : ""}`}
      onClick={checkStatus}
    >
      <p
        ref={pRef}
        contentEditable={editToDoList}
        suppressContentEditableWarning={true}
        onBlur={handleEdit}
        tabIndex={-1} // Make it focusable programmatically
        className={editToDoList ? "higlight" : ""}
      >
        {todo}
      </p>
      <span>
        <BiEditAlt onClick={editToDo} className={editToDoList ? "editToDoListBtn" : ""}/>
        <IoCheckmarkDoneCircleSharp onClick={deleteToDo} />
      </span>
    </li>
  );
}

export default ToDo;