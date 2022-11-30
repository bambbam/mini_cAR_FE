import SelectInput from "@mui/material/Select/SelectInput";
import { time } from "console";
import React, { useEffect, useRef, useState } from "react";
import { Api } from "../App";

interface StreamingProps {
    api: Api;
    user: string | null;
}

const Streaming = ({ api, user }: StreamingProps) => {
    const canvasref = useRef<HTMLCanvasElement>(null);
    const [socketConnected, setSocketConnected] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);
    const [items, setItems] = useState([]);

    const webSocketUrl = `ws://localhost:8000/stream`;
    let ws = useRef<WebSocket | null>(null);

    // 소켓 객체 생성
    useEffect(() => {
        if (!user) return;
        console.log(user);
        ws.current = new WebSocket(webSocketUrl + "/" + user + "/" + "ws");
        ws.current.onopen = () => {
            console.log("connected to " + webSocketUrl);
            if (ws.current) {
                ws.current.onmessage = (e) => {
                    console.log(e.data);
                };
            }
            setSocketConnected(true);
        };
        ws.current.onclose = (error) => {
            console.log("disconnect from " + webSocketUrl);
            console.log(error);
            setSocketConnected(false);
        };
        ws.current.onerror = (error) => {
            console.log("connection error " + webSocketUrl);
            console.log(error);
        };

        return () => {
            console.log("clean up");
            if (ws.current != null) ws.current.close();
        };
    }, [user]);

    // 소켓이 연결되었을 시에 send 메소드
    useEffect(() => {
        if (socketConnected) {
            if (ws.current == null) return;
            ws.current.onmessage = (evt) => {
                if (!(evt.data instanceof Blob)) {
                    console.log(evt.data);
                    return;
                }
                const reader = new FileReader();
                reader.readAsDataURL(evt.data);

                reader.onloadend = () => {
                    if (canvasref.current) {
                        const ctx = canvasref.current.getContext("2d");
                        if (ctx) {
                            const img = new Image();
                            img.onload = () => {
                                ctx.drawImage(img, 0, 0);
                            };
                            img.src = reader.result as string;
                        }
                    }
                };
            };
        }
    }, [socketConnected]);
    if (!socketConnected) {
        return <div>연결되지 않았습니다!</div>;
    }
    return <canvas height={960} width={1280} ref={canvasref} />;
};

export default Streaming;
