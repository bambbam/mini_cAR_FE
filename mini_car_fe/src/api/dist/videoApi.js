"use strict";
exports.__esModule = true;
var VideoApi = /** @class */ (function () {
    function VideoApi(client) {
        this.client = client;
        this.prefix = "/stream";
    }
    VideoApi.prototype.get_stream_video_url = function () {
        return this.client.getUri() + this.prefix;
    };
    // video streaming multipart-x-mixed-replace
    VideoApi.prototype.get_stream_video = function () {
        var tok = localStorage.getItem("access_token");
        return fetch(this.get_stream_video_url(), {
            method: "get",
            headers: {
                "Content-Type": "multipart/x-mixed-replace",
                Autorization: "Bearer " + tok
            }
        });
    };
    return VideoApi;
}());
exports["default"] = VideoApi;
