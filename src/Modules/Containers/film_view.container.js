/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */

 import React from 'react';
 import { Link } from 'react-router-dom';
 import $ from 'jquery';

 const VIEWFILM = (props)=>{

  let closeModel = () => {
    $('#exampleModal').modal('hide');
    $("#wrapper").toggleClass("toggled");

}
// console.log(props)
const movieDetails = props.movieDetails;
    return(

<div class="modal fade modal-mini" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-small" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title tc1 text-center" id="exampleModalLabel">{movieDetails.first_name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Are you sure you want to watch this?</p>

      </div>  
      <div class="modal-footer justify-content-center">
    <a   class="text-danger" data-dismiss="modal">No</a>
    <Link to="/view-movie"  onClick={closeModel}> <a   class="text-success">Yes
      </a></Link>  
    </div>  
    </div>
  </div>
</div>
    );
 }


 export default VIEWFILM;