import { Link , useLocation} from 'react-router-dom';
import './App.css';

export default function Navbar() {
	const location = useLocation();
	const shouldShowLogout = location.pathname !== '/' && location.pathname !== '/About';

	return (
		<>
			<nav className="navbar">
				<Link to="/">
					<img className="logo" src="/assets/logo_findout_blanc.png" />
				</Link>
				<ul className="list">
					<Link className="icon" to="/Login">
						<span className="material-symbols-outlined">account_circle</span>
					</Link>
					<Link className="searchIcon" to="/About">
						<span className="material-symbols-outlined">info</span>
					</Link>
					{shouldShowLogout && (
						<Link className="logoutIcon" to="/">
						<span className="material-symbols-outlined">mode_off_on</span>
						</Link>
					)}
				</ul>
			</nav>
		</>
	);
}
