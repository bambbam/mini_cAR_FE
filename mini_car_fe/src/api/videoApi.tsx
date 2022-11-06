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
    get_stream_video() {
        return this.client
            .get(this.prefix, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    responseType: "arraybuffer",
                },
            })
            .then((response) => {
                let decoder = new TextDecoder("utf-8");
                const base64string = decoder.decode(response.data);
                const contentType = response.headers["content-type"];
                return [base64string, contentType];
            })
            .then((ret) => {
                const base64string = ret[0];
                const contentType = ret[1];
                return "data:" + contentType + ";base64" + base64string;
            })
            .catch((error) => {
                console.error(error);
                return null;
            });
    }
}
export default VideoApi;
