import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-#2C7F5C">
          <Link className="navbar-brand" to="#">
            <p className="topbar">
              {" "}
              Get your Cannaby product by Black Friday.{" "}
              <Link to="#" className="topbarhr">
                {" "}
                Holiday Shipping Deaadlines
              </Link>
            </p>
          </Link>
        </nav>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-align-center test">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <Link className="navbar-brand" to="#">
              {props.Cannabytext}
            </Link>
          </div>
          <Link className="navbar-brand" to="#">
            {" "}
            <i className="fas fa-cannabis"></i>
            Categories
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className="nav-link active"
                  aria-current="page"
                  to="/deals"
                >
                  Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}

