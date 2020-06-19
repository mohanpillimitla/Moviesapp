import React from 'react';
import {NavLink,Link,Switch} from 'react-router-dom';


function Header(){

  return (

  <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{marginBottom:20,color:'white'}}>
  <Link className="navbar-brand" to="#">FINDMOVIES</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse align-items-center" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
      <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
      <NavLink className="nav-item nav-link" to="/customers">customers</NavLink>
      <NavLink className="nav-item nav-link" to="/login">login</NavLink>

    </div>
  </div>
</nav>






  )

    

}



export default Header;