import React from "react";

import "./square.scss";

interface SquareProps {
    children: string;
    bgcolor: string | undefined;
    fntcolor: string | undefined;
}

const Square = ({ children, bgcolor = "white", fntcolor = "black" }: SquareProps) => {
    const buttonStle = {
        backgroundColor: bgcolor,
        color: fntcolor,
    };
    return (
        <button className="square" style={buttonStle}>
            {children}
        </button>
    );
};

export default Square;
