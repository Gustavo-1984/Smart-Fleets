import axios from "axios/dist/axios";

const clienteAxios = axios.create({
    baseURL: "http://localhost:5000",
 });

 export default clienteAxios;