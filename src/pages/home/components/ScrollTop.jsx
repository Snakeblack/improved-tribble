import { useEffect, useState } from "react";
import { ScrollUp } from "../style/ScrollTop.styled";

const ScrollTop = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.location.href == "/") setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <ScrollUp 
      className={show ? "" : "hidden"}
    >
      <a
        href="#section-1"
        onClick={e => {
          let hero = document.getElementById("section-1");
          e.preventDefault();
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("section-1", "home", "/");
        }}
      ></a>
    </ScrollUp>
  );
};

export default ScrollTop;
