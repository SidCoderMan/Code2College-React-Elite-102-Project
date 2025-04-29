import {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Button from "./Button.jsx";
import Footer from "./Footerino.jsx";
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
            console.log(json.businesses);
            const foodUrl = json.businesses[randomIndex].image_url;
            document.getElementById("foodImage").src = foodUrl;
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
            const posterPath = json.results[randomIndex].poster_path;
            const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
            document.getElementById("movieImage").src = posterUrl;
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
    <Hero />
    <div className = "container">
      <div className = "content">
        <p className = "text"> Restaurant: {food}</p>
        <img id="foodImage" alt="Restaurant" width={250} height={200}></img>
        <p className = "text"> Movie: {movie}</p>
        <img id="movieImage" alt="Movie" width={250} height={200}></img>
      </div>
    <Button handleClick = {handleClick}></Button>
      
    </div>
    <Footer/>
  </div>
  );
}

export default App
