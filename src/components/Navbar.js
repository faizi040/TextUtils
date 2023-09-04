import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* using template literals to provide variable in bootstarp classes */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/*UpLine---way of printing props data in our elements */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* React Router part */}
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                         {/* React Router part */}

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault"> {props.text} DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
    // This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element
    //All React components must act like pure functions with respect to their props.
    //they will never change their props value
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    //is required will put error on console if you did not pass the prop

}

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set Title Here',
};
