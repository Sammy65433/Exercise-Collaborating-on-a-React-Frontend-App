import { Link } from "react-router";
import "../styles/Item.css";

export default function Item({ item, favoriteItems, setFavoriteItems }) {
  function addFavorite() {
    setFavoriteItems([...favoriteItems, item]);
  }

  return (
    <div className="item">
      <Link to={`/movie/${item.imdbID}`}>
        <img src={item.Poster} alt={item.Title} />
        <h2>{item.Title}</h2>
      </Link>

      <p>{item.Year}</p>

      <button onClick={addFavorite}>
        Add to Favorites
      </button>
    </div>
  );
}