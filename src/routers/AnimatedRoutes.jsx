import React from "react";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { Portfolio } from "../pages/projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence} from "framer-motion";

export const AnimatedRoutes = () => {
    const location = useLocation();
    const imgAbout = {
        alt: "About image",
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-581ed.appspot.com/o/images%2Ffoto-about.webp?alt=media&token=fa9353a9-d47f-4b07-8b4d-e9ded4b4d79a"
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About image={imgAbout}/>} />
                <Route path="/projects" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};