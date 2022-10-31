import { AxiosInstance } from "axios";

class UserApi {
    client: AxiosInstance;
    prefix: string;
    constructor(client: AxiosInstance) {
        this.client = client;
        this.prefix = "/user";
    }
}
