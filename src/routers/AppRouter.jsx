import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../layout/navbar/Navbar";
import { AnimatedRoutes } from "./AnimatedRoutes";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <ScrollToTop>
                <AnimatedRoutes />
            </ScrollToTop>
        </Router>
    );
};

export default AppRouter