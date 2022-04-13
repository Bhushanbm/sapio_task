import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    
      
        <NavLink to="/" class="nav-link" >Home </NavLink>
      
      &nbsp; &nbsp;
      
        <NavLink to="/liked" class="nav-link" >Liked</NavLink>
      
      
      
    
  </div>
 
</nav>

  )
}

export default Navbar