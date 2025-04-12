import {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
function App() {
  const [counter, setCounter] = useState(0);
  
  const raiseCounter = () => {
    console.log("Clicked!");
    setCounter(counter+1)
  };
  
  return(
  <div id="app">
    <p>{counter}</p>
    <Header />
    <Button handleCounter = {raiseCounter} />
    <button onClick={raiseCounter} >counter</button>
  </div>
  );
}

export default App
