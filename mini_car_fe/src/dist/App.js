"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var mainPage_1 = require("./page/mainPage");
var videoApi_1 = require("./api/videoApi");
var base_1 = require("./api/base");
var streamPage_1 = require("./page/streamPage");
var carApi_1 = require("./api/carApi");
var userApi_1 = require("./api/userApi");
var loginPage_1 = require("./page/loginPage");
var signupPage_1 = require("./page/signupPage");
var get_apis = function () { return ({
    videoApi: new videoApi_1["default"](base_1["default"]),
    carApi: new carApi_1["default"](base_1["default"]),
    userApi: new userApi_1["default"](base_1["default"])
}); };
function App() {
    var Apis = react_1.useMemo(function () { return get_apis(); }, []);
    var _a = react_1.useState(null), user = _a[0], setUser = _a[1];
    react_1.useEffect(function () {
        function f() {
            return __awaiter(this, void 0, void 0, function () {
                var access_token, ret, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            access_token = localStorage.getItem("access_token");
                            base_1.setAuthorizationToken(access_token);
                            return [4 /*yield*/, Apis.userApi.read_root()];
                        case 1:
                            ret = _b.sent();
                            setUser(ret.data.user);
                            return [3 /*break*/, 3];
                        case 2:
                            _a = _b.sent();
                            setUser(null);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        f();
    }, [Apis.userApi]);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(mainPage_1["default"], { api: Apis, user: user, setUser: setUser }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/stream", element: react_1["default"].createElement(streamPage_1["default"], { api: Apis, user: user, setUser: setUser }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(loginPage_1["default"], { api: Apis, user: user, setUser: setUser }) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup", element: react_1["default"].createElement(signupPage_1["default"], { api: Apis, user: user, setUser: setUser }) })))));
}
exports["default"] = App;
