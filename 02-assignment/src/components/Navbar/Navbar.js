import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid">
                    <Link to="/home">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item text-white">
                                <Link to="/ContactUs" class='text-white'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/ContactUs">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/ContactUs">Services</Link>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar