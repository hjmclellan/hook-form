import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';


function App() {
  const [state, setState]= useState({
    first:"",
    last:"",
    email:"",
    password:"",
    cpassword:""
  });
  return (
    <div className="App">
        <Form inputs={state} setInputs={setState}/>
        <Results data={state}/>
    </div>
  );
}

export default App;
