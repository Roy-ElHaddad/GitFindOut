import { Link } from 'react-router-dom'
import './App.css'

export default function Navbar() {

    return (
      <>
          <nav className = "navbar">
            <Link to="/"><img className="logo" src="/assets/logo_findout_blanc.png" /></Link>
            <ul className = "list">
              <Link className = "icon" to="/Login">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </Link>
              <Link className ="icon" to="/About">
                <span className="material-symbols-outlined">
                  info
                </span>
              </Link>
            </ul>
          </nav>
      </>
    )
}