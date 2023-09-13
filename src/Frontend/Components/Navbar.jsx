import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <nav className='navigation'>
        <div className='logo'>
          <img src='https://drive.google.com/uc?id=1eRiJ_0m0wSvJ4DvaDboLLU-PadPPf9u_' alt='books'></img>

        </div>

        <div className='items'>
          <Link className='dashboard' to="/home">Dashboard</Link>
          <Link className='addbooks' to="/addbooks">Add Books</Link>
          <Link className='logout' to="/">LogOut</Link>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
