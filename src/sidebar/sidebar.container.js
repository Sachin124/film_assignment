/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import '../sidebar/sidebar.css';
import LOGO from '../assets/logo.svg'
import $ from 'jquery';
// import { Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
class SIDEBAR extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Dashboard",
                to: "/cms",
                className: "active_link"
            },
            {
                id: 2,
                name: "Film Submission",
                to: "/cms",
                className: "active_link"
            },
            {
                id: 3,
                name: "Filmmakers",
                to: "/cms",
                className: "active_link"
            }
        ],
        activeLink: 2
    };
    handleClick = id => {
        this.setState({ activeLink: id });
    };
    render() {
        const { links, activeLink } = this.state;
        return (
            <div className="bg-custom border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <img className="logo" src={LOGO} />
                </div>
                <div className="mt-4 list-group list-group-flush">
                    <p className="cm text-white">CONTENT</p>
                    {/* <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
          <a href="#" className="list-group-item list-group-item-action">Film Submission</a>
          <a href="#" className="list-group-item list-group-item-action">Filmmakers</a>
          <a href="#" className="list-group-item list-group-item-action">Events</a>
          <a href="#" className="list-group-item list-group-item-action">Profile</a>
          <a href="#" className="list-group-item list-group-item-action">Status</a> */}
                    <div>
                        {links.map(link => {
                            return (
                                <div key={link.id}>
                                    <a
                                        onMouseEnter={() => this.handleClick(link.id)}
                                        className={'list-box list-group-item text-white ' +
                                            (link.id === activeLink ? link.className : "inactive_link")
                                        }
                                    >
                                        {link.name} {link.id === activeLink}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

};


export default SIDEBAR;