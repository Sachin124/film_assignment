/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React, { Component } from 'react';
import Helper from '../hoc/helper';
import FILMSUBMISSONS from '../Modules/Components/film_submission.component';
import VIEWMOVIE from '../Modules/Components/film_view.component';

import { Route } from 'react-router-dom';
import LAYOUT from '../layouts/layout';

class MODULEROUTER extends Component {

    
    render() {
        return (
            <Helper>
                <Route exact path="/movies-list" component={FILMSUBMISSONS} />
                <Route exact path="/view-movie" component={VIEWMOVIE} />
                
            </Helper>
        );
    }
}

export default MODULEROUTER;