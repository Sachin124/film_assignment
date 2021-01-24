/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import $ from 'jquery';
class FILMVIEW extends React.Component {
    
// componentDidMount(){
//     $("#wrapper").toggleClass("toggled");
// }
    render() {

        return (
            <div className="container-fluid">
                {/* Shree Ganesh!
                 */}
                <div className="row">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
};


export default FILMVIEW;