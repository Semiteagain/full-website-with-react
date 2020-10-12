import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    

    return (
        <>
          <nav className="navbar">
             <div className="navbar-container">
               <Link to='/' className='navbar-logo'>
                   SEMITE 
                
                   </Link>
             </div>
             

          </nav>
        </>
    )
}


export default Navbar;