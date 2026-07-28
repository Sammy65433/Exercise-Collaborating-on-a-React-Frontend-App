import React, { useState, useEffect } from "react"; 
import ItemList from "../components/ItemList"; 



export default function savedMovies() {
    const favoriteMovies = () => { 
    const [savedItems, setSavedItems] = useState([]); 

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedMovies")) || [] ;
        setSavedItems(saved); 
    }, ); 
    const handleDeselect = (id) => {
        const updatedItems = savedItems.filter((item) => item.id != id); 
        setSavedItems(updatedItems); 
        localStorage.setItem("savedMovies", JSON.stringify(updatedItems)); 
    }; 
    useEffect(() => {
        localStorage.setItem("savedMovies", JSON.stringify(savedItems)); 
    }, [savedItems]); 
    return (
        <>
        <h1> 🍿 SAVED MOVIES 🍿 </h1>
        {savedItems.length > 0 ? (
            <ItemList items={savedItems} 
            onToggleFavorites={handleToggleFavorite}
            onDeselect={handleDeselect}
            /> 
            
        ) : (
            <p> No Saved Movies Yet!</p>
        )
    
    }
        </>
    )
}

}





