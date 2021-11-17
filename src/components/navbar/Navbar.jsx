import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul className="df-jc-ac">
          <li className="list-item"><Link className="link" to="/">Home</Link></li>
          <li className="list-item"><Link className="link" to="/login">Log In</Link></li>
          <li className="list-item"><Link className="link" to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    </>
  )
}

export {Navbar}
