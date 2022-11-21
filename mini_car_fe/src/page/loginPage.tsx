import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthorizationToken } from "../api/base";
import { Api } from "../App";

interface ApiResult {
    login: "success" | "failure" | null;
}

interface LoginPageProp {
    api: Api;
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoginPage = ({ api, setUser }: LoginPageProp) => {
    const userApi = api.userApi;
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [apiResult, setApiResult] = useState<ApiResult>({
        login: null,
    });
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, hook: React.Dispatch<React.SetStateAction<string>>) => {
        hook(e.target.value);
        if (apiResult.login === "failure") {
            setApiResult({
                login: null,
            });
        }
    };

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await userApi.login({
                username,
                password,
            });
            localStorage.setItem("access_token", res.data.access_token);
            setAuthorizationToken(res.data.access_token);
            setApiResult((prev) => {
                const ret = {
                    ...prev,
                };
                ret.login = "success";
                return ret;
            });
        } catch (err) {
            setApiResult((prev) => {
                const ret = {
                    ...prev,
                };
                ret.login = "failure";
                return ret;
            });
        }
    };
    useEffect(() => {
        console.log(apiResult.login);
        const f = async () => {
            if (apiResult.login === "success") {
                console.log("123");
                const res = await userApi.read_root();
                setUser(res.data.user);
                navigate("/");
            }
        };
        f();
    }, [api, apiResult, navigate, setUser, userApi]);

    return (
        <div>
            <form onSubmit={onLogin}>
                <input onChange={(e) => onInputChange(e, setUsername)} />
                <input onChange={(e) => onInputChange(e, setPassword)} type="password" />
                <Button type="submit">로그인</Button>
            </form>
            {apiResult.login === "failure" && <div>로그인 정보가 잘못되었습니다.</div>}
        </div>
    );
};

export default LoginPage;
