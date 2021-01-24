/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React, { Component } from 'react';
import DATATABLE from "../COMMON/DATATABLE";
import VIEWFILM from '../Containers/film_view.container';
import Helper from '../../hoc/helper';

class FILMSUBMISSONS extends Component {
    state = {
        HEADERS: ["FIRST NAME", "FILM MAKER", "CATEGORY", "GENRE", "LENGTH", "TIME"],
        ROWS: [
            {
                id: 1,
                first_name: "The Countdown",
                film_maker: "MSN Karthik",
                category: "SHORT",
                genre: "SCI-FI",
                length: 9,
                time: "24 Jun, 23:12:00"
            },

            {
                id: 2,
                first_name: "The Countdown",
                film_maker: "MSN Karthik",
                category: "DOCU",
                genre: "SCI-FI",
                length: 9,
                time: "24 Jun, 23:12:00"
            },

            {
                id: 3,
                first_name: "The Countdown",
                film_maker: "MSN Karthik",
                category: "TRAVEL",
                genre: "SCI-FI",
                length: 9,
                time: "24 Jun, 23:12:00"
            },
        ],

        movieDetails: ''
    }
    viewPopup = (movieDetails) => {
        console.log(movieDetails)
        this.setState({ movieDetails: movieDetails });

    }

    render() {
        const tableRows = this.state.ROWS.map((row, i) => (
            <tr key={i}>
                <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                <td>
                    <p class="text-primary pointer" data-toggle="modal" data-target="#exampleModal" onClick={() => this.viewPopup(row)} >
                        {row.first_name}
                    </p></td>
                <td>{row.film_maker}</td>
                <td><span class="badge badge-purple bw">{row.category}</span></td>
                <td><span class="badge badge-yellow bw">{row.genre}</span></td>
                <td>{row.length}</td>
                <td>{row.time}</td>
            </tr>

        ))

        return (

            <Helper>
              <div className="container-fluid">
            <h5 className="mt-4">Film Submissions</h5>   
            <div class="row">  
              <div class="col-8 ">
                <div class="btn-group">
                  <div className="dropdown">
                    <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
           </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button className="dropdown-item" type="button">Action</button>
                      <button className="dropdown-item" type="button">Another action</button>
                      <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <button type="button" class="btn btn-orange">Danger</button>  
              </div>  
            </div>
          <div className="mt-4">          

                <DATATABLE headers={this.state.HEADERS} tableRows={tableRows} />

                <VIEWFILM movieDetails={this.state.movieDetails}/>
            </div>

          </div>

            </Helper>
        )
    }
}

export default FILMSUBMISSONS;
