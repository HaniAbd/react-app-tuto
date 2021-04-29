import React, {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                            <span className="badge badge-pill badge-secondary ml-5">{this.props.totalCounters}</span>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
