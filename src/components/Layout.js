import React from "react";
import {Link} from "react-router-dom";
import {Sidebar} from "./Sider";
import {Breadcrumb} from "./Breadcrumb";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="logo">
                    <Link to="/">OneIndex</Link>
                </div>
                <Sidebar />
            </div>
            <div className="main-content">
                <Breadcrumb />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}