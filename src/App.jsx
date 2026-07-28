<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getItemDetails, getItems } from "../api";
import "../styles/App.css";


=======
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getItems } from '../api';
import Nav from '../components/Nav/Nav';

getItems();
>>>>>>> main
// import Nav from "../components/Nav"
// import Home from "../pages/Home"
// import ItemDetails from "../pages/ItemDetails"
// import Favorites from "../pages/Favorites"

// import NotFound from "../pages/NotFound"

export default function App() {
	const [items, setItems] = useState([]);

<<<<<<< HEAD
    const [items, setItems] = useState([]); // stores the list of movies fetched from the API
const [favoriteItems, setFavoriteItems] = useState([]); // stores the movies the user adds to favorites
const [theme, setTheme] = useState("light"); // stores the current theme, starting with light mode



    useEffect(() => {
    async function loadMovies() {
        const movies = await getItems(); //get movie list fromAPi
        setItems(movies); //save the movie in state 

        if (movies.length > 0) { //make sure at least 1 movie returns
            const details = await getItemDetails(movies[0].imdbID); // get details from 1st movie in  imdbid
            console.log(details) //log details to console 
        }
    }
loadMovies(); //run async 
}, []); //empty dependency array

async function handleSearch() {
            const movies = await getItems(); //get movie list fromAPi
                    setItems(movies); //save the movie in state 

}


function addToFavorites(movie) {
    setFavoriteItems((prev) => { //update fav using current fav array
        const exists = prev.find((item) => item.imdbID === movie.imdbID); //check if movie already exist 
        return exists ? prev : [...prev, movie]; // if movie exist keep old array else add new array 
    });
}

function removefromFav() {
    setFavoriteItems((prev) =>  prev.filter((item) => item.imdbID !==id))
    //keep evry movie except the one whose id matches 
}


// light / dark - lightmode 
function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));


return (

<>
<ThemeContext.Provider value={theme}>







</ThemeContext.Provider>



</>
)




// useEffect

}
}
