import React from "react";
import {SWRConfig} from "swr";
import {fetcher} from "./utils/fetcher";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import type {FC} from "react";
import {Home} from "./pages/home";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export const App: FC = () => {
    return (
        <SWRConfig value={{fetcher: fetcher}}>
            <Router/>
        </SWRConfig>
    );
}
