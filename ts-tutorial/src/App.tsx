import React, {useReducer} from 'react';
import './App.css';
import Greetings from "./Greetings";
import Counter, {reducer} from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

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
          <ReducerSample/>
      </>

  );
}
export default App;
