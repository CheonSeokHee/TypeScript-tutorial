import React from 'react';
import './App.css';
import Greetings from "./Greetings";

function App() {
  const onClick = (name:string) => {
    alert(name + ' hello');
  }

  return (
    <Greetings name="천석희" onClick={onClick}/>
  );
}
export default App;
