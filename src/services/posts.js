/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: posts service
 * Date: 02-10-2020
 */

import axios from "utils/API";

/**
 *Create File
 *
 * @param {*} request payload
 * @returns response
 */
export const fetchPosts = async () => {
  let apiRes = null;

  console.log("fetching");

  try {
    apiRes = await axios.get("/posts");
  } catch (err) {
    apiRes = err;
  } finally {
    console.log("posts", apiRes);
    return apiRes;
  }
};
