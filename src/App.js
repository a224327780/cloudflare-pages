import type {FC} from "react";
import React from "react";
import {SWRConfig} from "swr";
import {fetcher} from "./utils/fetcher";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {Layout} from "./components/Layout";
import {AddDrive} from "./pages/AddDrive";


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/add" element={<AddDrive />}></Route>
                </Route>
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
