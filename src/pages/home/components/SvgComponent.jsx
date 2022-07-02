import * as React from "react";

const SvgComponent = (props) => (
    <svg
        width="18vw"
        height="18vw"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            // style={{
            //     stroke: "none",
            //     fillRule: "nonzero",
            //     fillOpacity: 1,
            // }}
            d="M343.75 343.75v62.5L500 250 343.75 93.75v62.5L437.5 250ZM156.25 343.75v62.5L0 250 156.25 93.75v62.5L62.5 250ZM156.25 312.5h62.5l125-125h-62.5Zm0 0"
        />
    </svg>
);

export default SvgComponent;
