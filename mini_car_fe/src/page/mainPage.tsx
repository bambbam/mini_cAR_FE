import React from "react";
import Header from "../component/header";
import Square from "../component/square";

const MainPage = () => {
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
