import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-danger">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Food Rush
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/info">
                                    Covid-19 Instructions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/creator">
                                    About Creator
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;