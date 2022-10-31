import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/mainPage";
import VideoApi from "./api/videoApi";
import client from "./api/base";
import StreamPage from "./page/streamPage";

const get_apis = () => ({
    videoApi: new VideoApi(client),
});
export type Api = ReturnType<typeof get_apis>;

function App() {
    const Apis = useMemo(() => get_apis(), []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage api={Apis} />} />
                    <Route path="/stream" element={<StreamPage api={Apis} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
