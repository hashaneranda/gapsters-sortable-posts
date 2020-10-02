/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Custom axios
 * Date: 03-10-2020
 */

import axios from "axios";

const axiosIntstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  responseType: "json",
});

export default axiosIntstance;
