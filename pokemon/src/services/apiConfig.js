import axios from 'axios'

let apiUrl;

const apiUrls = {
  production: "",
  development: "http//localhost:3000/api"
}
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.development
}

const api = axios.create({
  baseURL: apiUrl,
})

export default api;