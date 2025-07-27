import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // Determine text color based on mode
  const textColor = props.mode === 'dark' ? 'white' : 'black';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/cards" style={{ color: textColor }}>
          cards
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: textColor }}>
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: textColor }}>
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex mx-3">
            <div className="bg-primary rounded mx-1" onClick={()=>{props.toggleMode('primary')}} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-1" onClick={()=>{props.toggleMode('success')}} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-1" onClick={()=>{props.toggleMode('danger')}} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-1" onClick={()=>  {props.toggleMode('warning')}} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

          </div>

          {/* Dark Mode Toggle */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{props.toggleMode(null)}}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: textColor }}
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//  Prop Types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

// Default Props (Optional)
Navbar.defaultProps = {
  title: 'Set Title Here',
  homeText: 'Set Home Here'
};
