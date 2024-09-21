import axios from "axios";

const useAxios = axios.create({
    baseURL : 'https://reqres.in/api/',
})

export default useAxios
