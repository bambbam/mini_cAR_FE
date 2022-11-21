import React from "react";
import { Api } from "../App";
import Header from "../component/header";
import Square from "../component/square";

interface MainPageProps {
    api: Api;
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const MainPage = ({ api, user, setUser }: MainPageProps) => {
    const mainPageFlexStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        height: "50vh",
        width: "100vw",
        alignItems: "center",
    };

    return (
        <>
            <Header user={user} />
            <div style={mainPageFlexStyle}>
                <Square bgcolor="black" fntcolor="white">
                    로그인이 필요합니다
                </Square>
            </div>
        </>
    );
};

export default MainPage;
