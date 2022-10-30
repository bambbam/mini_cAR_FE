import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="navbar__logo">mini-cAR</div>
            <div>
                <Button onClick={() => {}}>gallery</Button>
                <Button onClick={() => {}}>streaming</Button>
                <Button onClick={() => {}}>login</Button>
            </div>
        </nav>
    );
};

export default Header;
