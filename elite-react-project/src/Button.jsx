import {useState, useEffect} from "react";

const yelpKey = "http://localhost:3001/api/yelp?term=food&location=austin";
const tmdbKey = "https://api.themoviedb.org/3/movie/popular?api_key=9369ac19724981e385d66aab69d57b62";

function Button(){
    const [movie, setMovie] = useState("");
    const [food, setFood] = useState("");
    
    //const[place, setPlace] = useState(0);
    async function handleClick(){
        await yelpGather();
        await tmdbGather();
    }
    async function yelpGather(){
        try {
            
            const result = await fetch(yelpKey);
            await result.json().then(json =>{
                const randomIndex = Math.floor(Math.random() * 20);
                setFood(json.businesses[randomIndex].name);
                return ""+ json.businesses[randomIndex].name
            })
          } catch (error) {
            console.error(error);
          }
        }
    
    async function tmdbGather(){
        try {
            
            const result = await fetch(tmdbKey);
            await result.json().then(json =>{
                const randomIndex = Math.floor(Math.random() * 20);
                setMovie(json.results[randomIndex].original_title);
                return  json.results[randomIndex].original_title;
            })
          } catch (error) {
            console.error(error);
          }
        }
    
        
        return{
        movie,
        food,
        render:(
        <>
        <button onClick = {handleClick} className="button">
            Match!
        </button>
       
        </>
          )


        };
}

export default Button