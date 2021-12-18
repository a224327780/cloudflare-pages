import React from "react";
import {Link} from "react-router-dom";

export const Breadcrumb = () => {
    return (
        <div className="header">
            <ul className="breadcrumb">
                <li><Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg></Link></li>
            </ul>
            <div className="ml-auto">
                <Link to="/add">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}