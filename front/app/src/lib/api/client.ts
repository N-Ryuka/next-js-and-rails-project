import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";
import Cookies from "js-cookie";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:3000/api/v1",
  }),
  options
);

export default client;
