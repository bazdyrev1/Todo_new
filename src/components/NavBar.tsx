import React from 'react';
import { Link } from "react-router-dom";


export const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-4 px1">
                <a href="/" className="brand-logo">
                    React + TypeScript
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Todo List</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}