/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */

 import React from 'react';
 import SIDEBAR from '../sidebar/sidebar.container';
 import NAVBAR from '../shared/navbar/navbar.container';
 import MODULEROUTER from '../Modules/modules.router';


 const LAYOUT = ()=>{


    return(
        <div className="d-flex" id="wrapper">
        <SIDEBAR />
        <div id="page-content-wrapper">
          <NAVBAR />
        
              <MODULEROUTER />
        </div>
      </div>
    )
 };


export default LAYOUT;