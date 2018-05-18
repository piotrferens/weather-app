import axios from "axios";

const URI =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a66aade46d009cd6a8db34df3e53d2f4";
export const http = axios.create({
  baseURL: URI
});

http.interceptors.response.use(response => response.data);
