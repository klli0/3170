import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (<nav className="main-menu">
        <ul>
            <li>
                <NavLink to="china">
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                        China data
                    </span>
                </NavLink>

            </li>

            <li className="has-subnav">
                <NavLink to="usa">
                    <i className="fa fa-list fa-2x"></i>
                    <span className="nav-text">
                        USA data
                    </span>
                </NavLink>

            </li>
            <li className="has-subnav">
                <NavLink to="world">
                    <i className="fa fa-folder-open fa-2x"></i>
                    <span className="nav-text">
                        World data
                    </span>
                </NavLink>

            </li>
            <li>
                <NavLink to="#">
                    <i className="fa fa-bar-chart-o fa-2x"></i>
                    <span className="nav-text">
                        Database (global)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    <i className="fa fa-font fa-2x"></i>
                    <span className="nav-text">
                        Database (China)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    <i className="fa fa-table fa-2x"></i>
                    <span className="nav-text">
                        Database (America)
                    </span>
                </NavLink>
            </li>
            <li className="has-subnav">
                <NavLink to="/worldmap">
                    <i className="fa fa-laptop fa-2x"></i>
                    <span className="nav-text">
                        Map (Global)
                    </span>
                </NavLink>

            </li>
            <li>
                <NavLink to="/chinamap">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <span className="nav-text">
                        Map (China)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/usamap">
                    <i className="fa fa-info fa-2x"></i>
                    <span className="nav-text">
                        Map (America)
                    </span>
                </NavLink>
            </li>
        </ul>
    </nav>);
}

export default Navbar;