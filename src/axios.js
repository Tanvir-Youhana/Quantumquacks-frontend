import axios from "axios";

const instance = axios.create({
    baseURL: "https://quantumquacks-backend.herokuapp.com",
});


export default instance;