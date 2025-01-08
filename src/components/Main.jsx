import React from 'react'
import ToDo from './ToDo';
import Notes from './Notes'

function Main({formDiv, secActive}) {
    return (
        <main>
            {secActive === "ToDo" && <ToDo formDiv={formDiv}/>}
            {secActive === "Notes" && <Notes formDiv={formDiv}/>}
        </main>
    )
}

export default Main;