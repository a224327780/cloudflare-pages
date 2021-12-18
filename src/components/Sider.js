import React from "react";
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="javascript:void(0);">OneDrive</Link>
                <ul className="sub-menu">
                    <li><Link to="">link2</Link></li>
                    <li><Link to="">link3</Link></li>
                </ul>
            </li>
            <li><Link to="">link41</Link></li>
            <li><Link to="">link5</Link></li>
        </ul>
    )
}