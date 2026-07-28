import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ItemDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        console.log("Movie ID:", id);
    }, [id]);

    return (
        <div>
            <h1>Movie Details</h1>
            <p>ID: {id}</p>
        </div>
    );
}

export default ItemDetails;