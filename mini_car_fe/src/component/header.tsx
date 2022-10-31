import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <Button
                onClick={() => {
                    navigate("/");
                }}
                className="navbar__logo"
            >
                mini-cAR
            </Button>
            <div>
                <Button onClick={() => {}}>gallery</Button>
                <Button
                    onClick={() => {
                        navigate("/stream");
                    }}
                >
                    streaming
                </Button>
                <Button onClick={() => {}}>login</Button>
            </div>
        </nav>
    );
};

export default Header;
