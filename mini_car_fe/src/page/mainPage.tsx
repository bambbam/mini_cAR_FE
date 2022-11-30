import React from "react";
import { useNavigate } from "react-router-dom";
import { Api, DefaultPageProps } from "../App";
import Header from "../component/header";
import Square from "../component/square";

const WithUserSquars = (navigator: (path: string) => void) => {
    return (
        <>
            <Square
                bgcolor="black"
                fntcolor="white"
                onClick={() => {
                    navigator("/stream");
                }}
            >
                스트리밍
            </Square>
            <Square
                bgcolor="black"
                fntcolor="white"
                onClick={() => {
                    navigator("/gallery");
                }}
            >
                갤러리
            </Square>
        </>
    );
};

const MainPage = ({ api, user, setUser }: DefaultPageProps) => {
    const mainPageFlexStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        height: "50vh",
        width: "100vw",
        alignItems: "center",
    };
    const nav = useNavigate();
    const navigator = (path: string) => {
        nav(path);
    };
    return (
        <>
            <Header user={user} />
            <div style={mainPageFlexStyle}>
                {user ? (
                    WithUserSquars(navigator)
                ) : (
                    <Square
                        bgcolor="black"
                        fntcolor="white"
                        onClick={() => {
                            navigator("/login");
                        }}
                    >
                        로그인이 필요합니다
                    </Square>
                )}
            </div>
        </>
    );
};

export default MainPage;
