import React from "react";

import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark  fixed-top">
        <div class="container-fluid">
          <Link
            to="/home"
            className="text-white p-2 navbar-brand text-decoration-none"
          >
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/AboutUs"
                  className="text-white p-2 text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/ContactUs"
                  className="text-white p-2 text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/servicePage"
                  className="text-white p-2 text-decoration-none"
                >
                  Services
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
