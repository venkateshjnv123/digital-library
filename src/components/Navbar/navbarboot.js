import React, { Component } from 'react';
import {ReactComponent as Nav1} from './navbarsvg.svg';

function NavBar(){
    return (
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">
  <span class="navbar-brand mb-0 h1">D- Library </span>
    
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
      </a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>

      <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
      </button>


    <Nav1/>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

        </div>
    )
}

export default NavBar;