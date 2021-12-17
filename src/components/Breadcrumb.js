import React from "react";
import {Link} from "react-router-dom";

export const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <ul>
                <li>Home</li>
            </ul>
            <div className="ml-auto">
                <Link to="/add">添加</Link>
            </div>
        </div>
    )
}