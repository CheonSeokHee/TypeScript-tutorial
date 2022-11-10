import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onClick = (name:string) => {
    alert(name + ' hello');
  }

  const onSubmit = (form: {name : string; description : string;}) => {
      console.log(form);
  }

  return (
      <>
        <Greetings name="천석희" onClick={onClick}/>
        <Counter/>
          <div>
              <MyForm onSubmit={onSubmit}  />
          </div>
      </>

  );
}
export default App;
