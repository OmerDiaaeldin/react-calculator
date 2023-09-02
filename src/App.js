import './App.css';
import Button from '@mui/material/Button';
import {useState, useRef, useEffect} from "react";

function Box(props){
  return(
    <div className = "box">
      <input type="text" autoFocus onChange={() => {
      document.querySelector("input").style.border = "0";
      }} ref = {props.inputRef}></input>
    </div>
  )
}

function Panel(){

  let buttonType = 'contained'
  
  function handleOperation(element){
    let input = document.querySelector("input")
    input.value = input.value + element;
    console.log(input.value)
  }

  function handleEqual(){
    try {
      document.querySelector("input").value = eval(document.querySelector("input").value);
    } catch (error) {
      document.querySelector("input").style.border = "solid red 2px"
      alert("invalid operation")
    }
  }

  return(
    <div className='panel'>
        <Button variant = {buttonType} onClick = {() => {
          handleOperation("+")
        }} className = "plus">+</Button>
        <Button variant = {buttonType} onClick = {() => {
          handleOperation("-")
        }} className = "minus">-</Button>
        <Button variant = {buttonType} onClick = {() => {
          handleOperation("*")
        }} className = "times">*</Button>
        <Button variant = {buttonType} onClick = {() => {
          handleOperation("/")
        }} className = "divide">/</Button>
        <Button variant = {buttonType} onClick = {handleEqual} className = "equal" >=</Button>
      </div>
  )
}

function App() {

  const inputRef = useRef(null);

  return (
    <div className="App" onKeyDown={() => {
      const input = inputRef.current;
      const length = input.value.length;
      input.setSelectionRange(length, length); // Set selection range to the end
      input.focus();
    }}>
      <header className="calculator">
        <Box inputRef = {inputRef}/>
        <Panel/>
      </header>
    </div>
  );
}

export default App;
