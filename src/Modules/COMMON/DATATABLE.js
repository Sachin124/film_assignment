/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';

const DATATABLE = (props) => {

    const tableHeaders = props.headers.map((column, j) => (
        <th  key={j}>{column}</th>
    ))

   

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                        {tableHeaders}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.tableRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DATATABLE;