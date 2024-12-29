import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  let [formDiv, editFormDiv] = useState(false);
  // console.log(formDiv);
  
  return (
    <>
      <Navbar formDiv={formDiv} editFormDiv={editFormDiv}/>
      <Main formDiv={formDiv}/>
    </>
  )
}

export default App
