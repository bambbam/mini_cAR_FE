"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Streaming = function (_a) {
    var api = _a.api, user = _a.user;
    var canvasref = react_1.useRef(null);
    var _b = react_1.useState(false), socketConnected = _b[0], setSocketConnected = _b[1];
    var _c = react_1.useState(false), sendMsg = _c[0], setSendMsg = _c[1];
    var _d = react_1.useState([]), items = _d[0], setItems = _d[1];
    var webSocketUrl = "ws://localhost:8000/stream";
    var ws = react_1.useRef(null);
    // 소켓 객체 생성
    react_1.useEffect(function () {
        if (!user)
            return;
        console.log(user);
        ws.current = new WebSocket(webSocketUrl + "/" + user + "/" + "ws");
        ws.current.onopen = function () {
            console.log("connected to " + webSocketUrl);
            if (ws.current) {
                ws.current.onmessage = function (e) {
                    console.log(e.data);
                };
            }
            setSocketConnected(true);
        };
        ws.current.onclose = function (error) {
            console.log("disconnect from " + webSocketUrl);
            console.log(error);
        };
        ws.current.onerror = function (error) {
            console.log("connection error " + webSocketUrl);
            console.log(error);
        };
        return function () {
            console.log("clean up");
            if (ws.current != null)
                ws.current.close();
        };
    }, [user]);
    // 소켓이 연결되었을 시에 send 메소드
    react_1.useEffect(function () {
        if (socketConnected) {
            if (ws.current == null)
                return;
            ws.current.onmessage = function (evt) {
                if (!(evt.data instanceof Blob)) {
                    console.log(evt.data);
                    return;
                }
                var reader = new FileReader();
                reader.readAsDataURL(evt.data);
                reader.onloadend = function () {
                    if (canvasref.current) {
                        var ctx_1 = canvasref.current.getContext("2d");
                        if (ctx_1) {
                            var img_1 = new Image();
                            img_1.onload = function () {
                                ctx_1.drawImage(img_1, 0, 0);
                            };
                            img_1.src = reader.result;
                        }
                    }
                };
            };
        }
    }, [socketConnected]);
    return react_1["default"].createElement("canvas", { height: 960, width: 1280, ref: canvasref });
};
exports["default"] = Streaming;
