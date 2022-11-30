"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var base_1 = require("../api/base");
require("./header.scss");
var LogoutArea = function (_a) {
    var username = _a.username;
    var navigate = react_router_dom_1.useNavigate();
    var logout = function () {
        localStorage.removeItem("access_token");
        base_1.setAuthorizationToken(null);
        window.location.href = "/";
    };
    return (react_1["default"].createElement("div", { className: "navbar__right" },
        react_1["default"].createElement("div", { className: "navbar__right__username" }, username),
        react_1["default"].createElement(material_1.Button, { onClick: function () {
                navigate("/stream");
            } }, "stream"),
        react_1["default"].createElement(material_1.Button, { onClick: logout }, "logout")));
};
var Header = function (props) {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("nav", { className: "navbar" },
        react_1["default"].createElement("div", { className: "navbar__logo", onClick: function () {
                navigate("/");
            } }, "mini-cAR"),
        react_1["default"].createElement("div", null, props.user == null ? (react_1["default"].createElement(material_1.Button, { onClick: function () {
                navigate("/login");
            } }, "login")) : (react_1["default"].createElement(LogoutArea, { username: props.user })))));
};
exports["default"] = Header;
