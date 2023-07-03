import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import db from "./db.json";
// import data from db.json

function App() {
  const [data, setData] = useState(db);

  function handleAsc(){
    var x = data.sort((a, b) => {return a.first_name.localeCompare(b.first_name)});
    setData([...x]);
  }

  function handleDesc(){
    var x = data.sort((a, b) => {return b.first_name.localeCompare(a.first_name)});
    setData([...x]);
  }

  return (
    <div className="App" data-testid="app">
      <button data-testid="sort-asc-btn" onClick={handleAsc}>Sort by Asc</button>
      <button data-testid="sort-desc-btn" onClick={handleDesc}>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
     { data.map((el)=>(<UserDetails {...el} />))}
    </div>
  );
}

export default App;
