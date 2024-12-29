import React from 'react'
import ToDo from './ToDo';

function Main({formDiv}) {
    return (
        <main>
          <ToDo formDiv={formDiv}/>
        </main>
    )
}

export default Main;