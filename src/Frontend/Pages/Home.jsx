import React from 'react'
import './home.css';
import Navbar from '../Components/Navbar'

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home-page'>
    <div className="container">
    <div className='firstdiv'>
    <h2  className='book'>Book Store</h2>
         
          <p className='para' >Checkout The Books From Here.</p>
          <Link className='viewbook' to="/books">View Book</Link>
     </div> 
        <div className='seconddiv'>
          <img className='logo1' src="https://i.pinimg.com/originals/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg" alt="" />
        
        </div>
        </div>
    </div>
    </>
    )
  }

export default Home