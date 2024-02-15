import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
});

export { axiosInstance }
//TODO Define these two values
// axios.defaults.headers.common['Authorization'] = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

