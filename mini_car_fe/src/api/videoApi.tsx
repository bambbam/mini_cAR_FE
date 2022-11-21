import { AxiosInstance } from "axios";

class VideoApi {
    client: AxiosInstance;
    prefix: string;
    constructor(client: AxiosInstance) {
        this.client = client;
        this.prefix = "/stream";
    }
    get_stream_video_url() {
        return this.client.getUri() + this.prefix;
    }
    // video streaming multipart-x-mixed-replace
    get_stream_video() {
        const tok: string | null = localStorage.getItem("access_token");
        return fetch(this.get_stream_video_url(), {
            method: "get",
            headers: {
                "Content-Type": "multipart/x-mixed-replace",
                Autorization: `Bearer ${tok}`,
            },
        });
    }
}
export default VideoApi;
