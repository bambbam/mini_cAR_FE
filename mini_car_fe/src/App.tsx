import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/mainPage";
import VideoApi from "./api/videoApi";
import client, { setAuthorizationToken } from "./api/base";
import StreamPage from "./page/streamPage";
import CarApi from "./api/carApi";
import UserApi from "./api/userApi";
import LoginPage from "./page/loginPage";
import SignupPage from "./page/signupPage";
import GalleryPage from "./page/galleryPage";
import GalleryApi from "./api/galleryApi";
import S3Api from "./api/s3";

const get_apis = () => ({
    videoApi: new VideoApi(client),
    carApi: new CarApi(client),
    userApi: new UserApi(client),
    galleryApi: new GalleryApi(client),
    s3Api: new S3Api("cap-mini-car"),
});
export type Api = ReturnType<typeof get_apis>;

export interface DefaultPageProps {
    api: Api;
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

function App() {
    const Apis = useMemo(() => get_apis(), []);
    const [user, setUser] = useState<string | null>(null);
    useEffect(() => {
        async function f() {
            try {
                const access_token = localStorage.getItem("access_token");
                setAuthorizationToken(access_token);
                const ret = await Apis.userApi.read_root();
                setUser(ret.data.user);
            } catch {
                setUser(null);
            }
        }
        f();
    }, [Apis.userApi]);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage api={Apis} user={user} setUser={setUser} />} />
                    <Route path="/stream" element={<StreamPage api={Apis} user={user} setUser={setUser} />} />
                    <Route path="/login" element={<LoginPage api={Apis} user={user} setUser={setUser} />} />
                    <Route path="/signup" element={<SignupPage api={Apis} user={user} setUser={setUser} />} />
                    <Route path="/gallery" element={<GalleryPage api={Apis} user={user} setUser={setUser} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
