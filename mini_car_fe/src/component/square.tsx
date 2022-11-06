import React from "react";

import "./square.scss";

interface SquareProps {
    children: string;
    bgcolor: string | undefined;
    fntcolor: string | undefined;
    onClick?: () => void;
}

const Square = ({ children, bgcolor = "white", fntcolor = "black", onClick }: SquareProps) => {
    const buttonStle = {
        backgroundColor: bgcolor,
        color: fntcolor,
    };
    return (
        <button className="square" style={buttonStle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Square;
