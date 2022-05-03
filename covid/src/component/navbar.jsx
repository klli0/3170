import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (<nav class="main-menu">
        <ul>
            <li>
                <NavLink to="http://www.bootstrapmb.com">
                    <i class="fa fa-home fa-2x"></i>
                    <span class="nav-text">
                        Chart (global)
                    </span>
                </NavLink>

            </li>

            <li class="has-subnav">
                <NavLink to="#">
                    <i class="fa fa-list fa-2x"></i>
                    <span class="nav-text">
                        Chart (China)
                    </span>
                </NavLink>

            </li>
            <li class="has-subnav">
                <NavLink to="#">
                    <i class="fa fa-folder-open fa-2x"></i>
                    <span class="nav-text">
                        Chart (America)
                    </span>
                </NavLink>

            </li>
            <li>
                <NavLink to="#">
                    <i class="fa fa-bar-chart-o fa-2x"></i>
                    <span class="nav-text">
                        Database (global)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    <i class="fa fa-font fa-2x"></i>
                    <span class="nav-text">
                        Database (China)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="#">
                    <i class="fa fa-table fa-2x"></i>
                    <span class="nav-text">
                        Database (America)
                    </span>
                </NavLink>
            </li>
            <li class="has-subnav">
                <NavLink to="/worldmap">
                    <i class="fa fa-laptop fa-2x"></i>
                    <span class="nav-text">
                        Map (Global)
                    </span>
                </NavLink>

            </li>
            <li>
                <NavLink to="/chinamap">
                    <i class="fa fa-map-marker fa-2x"></i>
                    <span class="nav-text">
                        Map (China)
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/usamap">
                    <i class="fa fa-info fa-2x"></i>
                    <span class="nav-text">
                        Map (America)
                    </span>
                </NavLink>
            </li>
        </ul>
        <ul class="logout">
            <li>
                <NavLink to="#">
                    <i class="fa fa-power-off fa-2x"></i>
                    <span class="nav-text">
                        退出
                    </span>
                </NavLink>
            </li>
        </ul>
    </nav>);
}

export default Navbar;