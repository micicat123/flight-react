import { Component, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-light sticky-top bg-light flex-md-nowrap shadow p-1">
            <Link to={'/'} className="navbar-brand bg-light shadow-none pl-5">  
                Flight Assistant
            </Link>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link to={'/volleyball'} className="p-5 text-dark">  
                    Volleyball
                </Link>
                <Link to={'/basketball'} className="p-5 text-dark">  
                    Basketball
                </Link>
                <Link to={'/baseball'} className="p-5 text-dark">  
                    Baseball
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;