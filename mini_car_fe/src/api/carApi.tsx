import { AxiosInstance } from "axios";

export enum Movement {
    nothing = 0,
    forward,
    right,
    left,
    backward,
    stop,
    beep,
    speedup,
    speeddown,
}

class CarApi {
    client: AxiosInstance;
    prefix: string;
    constructor(client: AxiosInstance) {
        this.client = client;
        this.prefix = "/car";
    }
    move(dir: Movement) {
        return this.client.post(this.prefix, {
            dir: dir,
        });
    }
}
export default CarApi;
