import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Sidebar(props) {
    return (
        <div>
            <h1>Sidebar</h1>
            <ul>
                <li>
                <Link to="/users">Users</Link>
                </li>
                <li>
                <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;