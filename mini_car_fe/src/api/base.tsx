import axios from "axios";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
});

export const setAuthorizationToken = (token: string | null) => {
    if (token) {
        client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete client.defaults.headers.common["Authorization"];
    }
};

export default client;
