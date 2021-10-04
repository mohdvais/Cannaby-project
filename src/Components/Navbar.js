import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-#2C7F5C">
          <a className="navbar-brand" href="#">
            <p className="topbar">
              {" "}
              Get your Cannaby product by Black Friday.{" "}
              <a href="#" className="topbarhr">
                {" "}
                Holiday Shipping Deaadlines
              </a>
            </p>
          </a>
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
            <a className="navbar-brand" href="#">
              {props.Cannabytext}
            </a>
          </div>
          <a className="navbar-brand" href="#">
            {" "}
            <i className="fas fa-cannabis"></i>
            Categories
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="../Deals.js"
                >
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Wishlist.js">
                  Brands
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

