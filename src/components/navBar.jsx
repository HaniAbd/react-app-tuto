import React, {Component} from "react";

// Stateless Functional Component
const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="badge badge-pill badge-secondary ml-5">{props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
