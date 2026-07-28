

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "http://www.omdbapi.com"

export async function getItems(query = "batman") {
    try {

        const resp = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
        const data = await resp.json();

        console.log(data)

        if(data.resp === "False") {
            return [];
        }

        return data.Search;
        
    } catch (error) {
        console.error("Error fetching Data:", error)
    }
}
