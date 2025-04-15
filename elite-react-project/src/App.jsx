import {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
function App() {
  const {render, movie, food} = Button();
  
 
  
  return(
  <div id="app">
    
    <Header />
    <p>Movie: {movie}  Food: {food}</p>
    {render}
    
  </div>
  );
}

export default App
