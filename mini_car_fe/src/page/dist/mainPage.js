"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var header_1 = require("../component/header");
var square_1 = require("../component/square");
var WithUserSquars = function (navigator) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(square_1["default"], { bgcolor: "black", fntcolor: "white", onClick: function () {
                navigator("/stream");
            } }, "\uC2A4\uD2B8\uB9AC\uBC0D"),
        react_1["default"].createElement(square_1["default"], { bgcolor: "black", fntcolor: "white", onClick: function () {
                navigator("/gallery");
            } }, "\uAC24\uB7EC\uB9AC")));
};
var MainPage = function (_a) {
    var api = _a.api, user = _a.user, setUser = _a.setUser;
    var mainPageFlexStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        height: "50vh",
        width: "100vw",
        alignItems: "center"
    };
    var nav = react_router_dom_1.useNavigate();
    var navigator = function (path) {
        nav(path);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(header_1["default"], { user: user }),
        react_1["default"].createElement("div", { style: mainPageFlexStyle }, user ? (WithUserSquars(navigator)) : (react_1["default"].createElement(square_1["default"], { bgcolor: "black", fntcolor: "white", onClick: function () {
                navigator("/login");
            } }, "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4")))));
};
exports["default"] = MainPage;
