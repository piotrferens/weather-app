import axios from "axios";

const URI = `http://api.openweathermap.org/data/2.5/weather`;
export const http = axios.create({
    baseURL: URI,
});

http.interceptors.response.use(response => response.data);
http.interceptors.request.use(request => {
    request.params = { ...request.params, appid: "a66aade46d009cd6a8db34df3e53d2f4" };
    return request;
});
