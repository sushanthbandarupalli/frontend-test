import axios from "axios";

const Api = axios.create({
  baseURL:"https://backend-test-ox7l.onrender.com/api/v1",
});

export default Api;
