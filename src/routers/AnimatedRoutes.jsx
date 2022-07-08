import React from "react";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { Projects } from "../pages/projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence} from "framer-motion";

export const AnimatedRoutes = () => {
    const location = useLocation();
    const imgAbout = {
        alt: "About image",
        src: "" // TODO: Añadir imagen nueva para el about
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About image={imgAbout}/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};
