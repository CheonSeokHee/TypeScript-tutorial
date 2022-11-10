import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";

function App() {
  const onClick = (name:string) => {
    alert(name + ' hello');
  }

  return (
      <>
        <Greetings name="천석희" onClick={onClick}/>
        <Counter/>
      </>

  );
}
export default App;
