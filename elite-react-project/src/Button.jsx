import {useState, useEffect} from "react";
import "./App.css";

function Button({handleClick}){
    
    
    
    return(
      <button className = "button" onClick = {handleClick}> Match! </button>
    )
        
  }

export default Button