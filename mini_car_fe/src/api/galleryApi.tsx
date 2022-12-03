import { AxiosInstance, AxiosResponse } from "axios";

export interface Image {
    id: string;
    car_id: string;
    key: string;
    type: string;
    created_date: string;
}

class GalleryApi {
    client: AxiosInstance;
    prefix: string;
    constructor(client: AxiosInstance) {
        this.client = client;
        this.prefix = "/gallery";
    }
    get_img_list(): Promise<AxiosResponse<Image[]>> {
        return this.client.get(this.prefix);
    }
}

export default GalleryApi;
