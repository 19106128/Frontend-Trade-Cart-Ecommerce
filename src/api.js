import axios from "axios";

const instance = axios.create({
  baseURL: "https://frontend-trade-cart-ecommerce.onrender.com",
});

export default instance;