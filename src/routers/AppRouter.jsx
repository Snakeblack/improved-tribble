import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../layout/navbar/Navbar";
import { AnimatedRoutes } from "./AnimatedRoutes";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    );
};

export default AppRouter