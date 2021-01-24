/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import Helper from '../../hoc/helper';
import $ from 'jquery';

const NAVBAR = (props) => {
    let handleClick = () => {
        $("#wrapper").toggleClass("toggled");
}
    return (
        <Helper>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

        <button className="navbar-toggler" type="button" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="">
            <input className="form-control" type="search" id="gsearch" name="gsearch" placeholder='Search Films and Filmmakers' />
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
           */}
          </ul>
        </div>
      </nav>


        </Helper >
    )
};


export default NAVBAR;