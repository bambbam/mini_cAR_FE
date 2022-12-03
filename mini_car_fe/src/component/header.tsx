import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setAuthorizationToken } from "../api/base";
import "./header.scss";

interface HeaderProps {
    user: string | null;
}

const LogoutArea = ({ username }: { username: string }) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("access_token");
        setAuthorizationToken(null);
        window.location.href = "/";
    };
    return (
        <div className="navbar__right">
            <div className="navbar__right__username">{username}</div>
            <Button
                onClick={() => {
                    navigate("/stream");
                }}
            >
                stream
            </Button>
            <Button
                onClick={() => {
                    navigate("/gallery");
                }}
            >
                gallery
            </Button>
            <Button onClick={logout}>logout</Button>
        </div>
    );
};

const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div
                className="navbar__logo"
                onClick={() => {
                    navigate("/");
                }}
            >
                mini-cAR
            </div>
            <div>
                {props.user == null ? (
                    <Button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        login
                    </Button>
                ) : (
                    <LogoutArea username={props.user}></LogoutArea>
                )}
            </div>
        </nav>
    );
};

export default Header;
