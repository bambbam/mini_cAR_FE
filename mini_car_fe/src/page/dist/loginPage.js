"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var base_1 = require("../api/base");
var LoginPage = function (_a) {
    var api = _a.api, setUser = _a.setUser, user = _a.user;
    var userApi = api.userApi;
    var navigate = react_router_dom_1.useNavigate();
    var _b = react_1.useState(""), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState({
        login: null
    }), apiResult = _d[0], setApiResult = _d[1];
    var onInputChange = function (e, hook) {
        hook(e.target.value);
        if (apiResult.login === "failure") {
            setApiResult({
                login: null
            });
        }
    };
    var onLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userApi.login({
                            username: username,
                            password: password
                        })];
                case 2:
                    res = _a.sent();
                    localStorage.setItem("access_token", res.data.access_token);
                    base_1.setAuthorizationToken(res.data.access_token);
                    setApiResult(function (prev) {
                        var ret = __assign({}, prev);
                        ret.login = "success";
                        return ret;
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setApiResult(function (prev) {
                        var ret = __assign({}, prev);
                        ret.login = "failure";
                        return ret;
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        console.log(apiResult.login);
        var f = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(apiResult.login === "success")) return [3 /*break*/, 2];
                        console.log("123");
                        return [4 /*yield*/, userApi.read_root()];
                    case 1:
                        res = _a.sent();
                        setUser(res.data.user);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        f();
    }, [api, apiResult, navigate, setUser, userApi]);
    react_1.useEffect(function () {
        if (user) {
            navigate("/");
        }
    });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: onLogin },
            react_1["default"].createElement("input", { onChange: function (e) { return onInputChange(e, setUsername); } }),
            react_1["default"].createElement("input", { onChange: function (e) { return onInputChange(e, setPassword); }, type: "password" }),
            react_1["default"].createElement(material_1.Button, { type: "submit" }, "\uB85C\uADF8\uC778")),
        apiResult.login === "failure" && react_1["default"].createElement("div", null, "\uB85C\uADF8\uC778 \uC815\uBCF4\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")));
};
exports["default"] = LoginPage;
