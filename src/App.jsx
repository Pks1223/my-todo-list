import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  let [formDiv, editFormDiv] = useState(false);
  const [secActive, setsecActive] = useState("Notes");
  
  return (
    <>
      <Navbar formDiv={formDiv} editFormDiv={editFormDiv}/>
      <Main  formDiv={formDiv} secActive={secActive}/>
    </>
  )
}

export default App
