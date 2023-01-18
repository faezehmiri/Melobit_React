import '../css/Style.css';
import React, { useState, useEffect } from 'react'
import melobit from '../images/melobit.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { BiMusic } from "react-icons/bi";
import { Link } from 'react-router-dom';


function NavbarHead() {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                <BiMusic className='p-2 melobit-icon'/>
                 <img src={melobit} className='melobit-text'></img> 
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">

            <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item  ">
                        <Link to="/" className="text-decoration-none nav-link text-light font-weight-bold " >Home</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/" className="text-decoration-none nav-link text-secondary font-weight-bold disabled" aria-disabled>Playlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="text-decoration-none nav-link text-secondary font-weight-bold disabled" aria-disabled>Favorite</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="text-decoration-none nav-link text-secondary font-weight-bold disabled" aria-disabled>History</Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
                    <li className="nav-item">
                        <Link to="/search">
                            <AiOutlineSearch className='text-light search-icon' />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className='text-light login-btn' >Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarHead;