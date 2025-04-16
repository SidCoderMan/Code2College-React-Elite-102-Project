import {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import "./App.css";
const yelpKey = "http://localhost:3001/api/yelp?term=food&location=austin";
const tmdbKey = "https://api.themoviedb.org/3/movie/popular?api_key=9369ac19724981e385d66aab69d57b62";


function App() {
    const [movie, setMovie] = useState("No movie");
    const [food, setFood] = useState("No food");

    async function getFood(){
    try {
        
        const result = await fetch(yelpKey);
        await result.json().then(json =>{
            const randomIndex = Math.floor(Math.random() * 20);
            setFood(json.businesses[randomIndex].name);
            console.log(json.businesses[randomIndex].name);
            return  json.businesses[randomIndex].name;
        })
      } catch (error) {
        console.error(error);
      }
    }
  
  async function getMovie(){
    try {
        
        const result = await fetch(tmdbKey);
        await result.json().then(json =>{
            const randomIndex = Math.floor(Math.random() * 20);
            setMovie(json.results[randomIndex].original_title);
            console.log(json.results[randomIndex].original_title);
            return   json.results[randomIndex].original_title;
        })
      } catch (error) {
        console.error(error);
      }
    }
    function handleClick(){
      getMovie();
      getFood();
    }
    useEffect(() =>{
      console.log({food, movie});
    }, [food, movie])
 
  
  return(
  <div id="main">
    
    <Header />
    <div className = "container">
      <div className = "content">
        <p className = "text"> Restaurant: {food}</p>
        <p className = "text"> Movie: {movie}</p>
      </div>
    <Button handleClick = {handleClick}></Button>
      
    </div>
  </div>
  );
}

export default App
