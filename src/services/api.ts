import axios from "axios";

const urlApiPath = "http://localhost:3004";

const api = axios.create({
  baseURL:  `${urlApiPath}/`,
});

export default api;