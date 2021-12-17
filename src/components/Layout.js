import React from "react";
import {Content} from "./Content";
import {Link} from "react-router-dom";
import {Sidebar} from "./Sider";
import {Breadcrumb} from "./Breadcrumb";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <div className="wrapper h-full w-full">
            <div className="sidebar">
                <div className="logo">
                    <Link to="/">OneIndex</Link>
                </div>
                <Sidebar></Sidebar>
            </div>
            <div className="main-content">
                <div className="content">
                    <Breadcrumb></Breadcrumb>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}