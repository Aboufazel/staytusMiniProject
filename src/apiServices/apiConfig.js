import axios from "axios";

export const BaseUrl = axios.create({
    baseURL:'https://swapi.dev/api/'
})

BaseUrl.interceptors.request.use(
    function (config) {
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
