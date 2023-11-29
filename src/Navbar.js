import { NavLink } from 'react-router-dom'
import './navbar.css'
import logo512 from './images/logo512.png';

import {Router,} from "react-router-dom";
const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="container">
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li> <img src={logo512} alt="Logo-Site" style={{ width: '4rem',height: '4rem',float:'left' }}/></li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/flower">Flower</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/panier">Panier</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar