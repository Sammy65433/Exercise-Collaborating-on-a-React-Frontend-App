import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getItems } from '../api';
import Nav from '../components/Nav/Nav';

getItems();
// import Nav from "../components/Nav"
// import Home from "../pages/Home"
// import ItemDetails from "../pages/ItemDetails"
// import Favorites from "../pages/Favorites"

// import NotFound from "../pages/NotFound"

export default function App() {
	const [items, setItems] = useState([]);

	return (
		<>
			<Nav />
		</>
	);
}
