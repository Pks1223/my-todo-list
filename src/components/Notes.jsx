import React, { useState } from 'react'

function Notes({formDiv}) {
    let [notesList, setNotesList] = useState([]);

    let saveNotes = (event) => {
    event.preventDefault();

    let notesTitleInp = event.target.notesTitleInp.value;
    let notesInp = event.target.notesInp.value;
    if(notesInp === "") return;
    // alert(todoInp);
    if (!notesList.includes(notesInp)) {
      let finalTasklist = [...notesList, notesInp];
      setNotesList(finalTasklist);
    } else {
      alert("Notes Already exist");
    }
  };

  return (
    <div className="formDiv">
      <form onSubmit={saveNotes} className={formDiv? "":"hide"}>
        <input type="text" name="notesTitleInp" placeholder="Enter your Notes Title. (Optional)" />
        <textarea rows="4"  type="text" name="notesInp" placeholder="Enter your Notes Description. (Required)" />
        <button>Add</button>
      </form>
      <div className="notesListDiv">
        <ul></ul>
        {/* <ul>{list}</ul> */}
      </div>
    </div>
  )
}

export default Notes;