import React, { useContext } from 'react'
import logo from "../../assets/logo.png"
import "./Nav.css"
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { GetRecipe } from '../../Context'
function Nav() {
  const {bag}=useContext(GetRecipe)
  return (
    <nav>
       <Link to={`/`}> <div className="logo">
            <img src={logo}  width={40} />
            <h1>F00D</h1>
        </div>
</Link>
        <ul>
          <NavLink to={`recipe`} 
          >  <li>Recipe</li> </NavLink>
          <NavLink to={`bag`}
           
          > <li><FaShoppingBag /> <small className='count'>{bag.length}</small></li></NavLink>
        </ul>
    </nav>
  )
}

export default Nav