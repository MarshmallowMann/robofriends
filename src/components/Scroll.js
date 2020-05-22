import React from "react";

const Scroll = (props) => {
    return (
        <div className="center" style={{
            overflowY: "scroll", border: "1px solid black", height: "30em", width: "auto", padding:"10px"
        }}>
            {props.children}
        </div >
    );

};

export default Scroll;