const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function getItems(query = "batman") {
    try {
        const resp = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
        const data = await resp.json();

        console.log("Search results:", data);
        console.log("Movies array:", data.Search);

        if (data.Response === "False") {
            return [];
        }

        return data.Search || [];
    } catch (error) {
        console.error("Error fetching Movies:", error);
        return [];
    }
}

export async function getItemDetails(id) {
    console.log("ID:", id);
    try {
        const resp = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
        console.log(resp)
        const text = await resp.json();
        console.log("RAW:", text);
        // const data = JSON.parse(text);
        

        if (text.Response === "False") { //check if OMDb says the movie was not found 
            return null;
        }

        return text;

    } catch (error) {
        console.error("Error fetching MovieDetails:", error);
        return null;
    }
}

