
import './App.css';
import {Router , Link, navigate} from '@reach/router';
import { useState } from 'react'
import People from "./Component/People";
import Planet from "./Component/Planet";


function App() {

  const [id, setId]= useState(1);
  const [item, setItem]= useState("");
  

  const idHandler = (e) => {
    setId(e.target.value);
  }

  const goToPage = (e) => {
    e.preventDefault();
    console.log(item);
    navigate("/"+ item + "/"+id);
  }

  const itemHandler = (e) => {
    console.log(e.target.value);
    setItem(e.target.value);
    // setItem({item})
  }

  return (
    <>
      <div>
        <label>Search for:</label>
        <select value={ item } onChange= { itemHandler }>
          <option value="people" >People</option>
          <option value="planets" >Planets</option>
        </select>
        <form onSubmit= { goToPage }>
          <input type="text" onChange = { idHandler } />
          <input type="submit" value="Search" />
        </form>
      </div>
      <Router>
        <People path="/people/:id"/>
        <Planet path="/planets/:id"/>
      </Router>
    </>
    
  );
}

export default App;
