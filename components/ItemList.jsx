import Item from "./Item";
import "../styles/ItemList.css";

export default function ItemList({ items, favoriteItems, setFavoriteItems }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.imdbID}
          item={item}
          favoriteItems={favoriteItems}
          setFavoriteItems={setFavoriteItems}
        />
      ))}
    </div>
  );
}