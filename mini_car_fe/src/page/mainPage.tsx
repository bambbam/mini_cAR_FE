import React from "react";
import { Api } from "../App";
import Header from "../component/header";
import Square from "../component/square";

interface MainPageProps {
    api: Api;
}

const MainPage = ({ api }: MainPageProps) => {
    const mainPageFlexStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        height: "50vh",
        width: "100vw",
        alignItems: "center",
    };

    return (
        <>
            <Header />
            <div style={mainPageFlexStyle}>
                <Square bgcolor="black" fntcolor="white">
                    로그인이 필요합니다
                </Square>
            </div>
        </>
    );
};

export default MainPage;
