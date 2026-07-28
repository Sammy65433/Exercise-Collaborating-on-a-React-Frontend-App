import './Nav.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Nav = () => {
	const toggleTheme = useContext(ThemeContext);

	return (
		<>
			<nav>
				<button onClick={toggleTheme} className="nav-btn">
					Toggle Theme
				</button>
			</nav>
		</>
	);
};

export default Nav;
