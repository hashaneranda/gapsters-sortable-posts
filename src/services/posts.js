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

  //   return [
  //     {
  //       userId: 1,
  //       id: 1,
  //       title:
  //         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //       body:
  //         "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //     },
  //     {
  //       userId: 1,
  //       id: 2,
  //       title: "qui est esse",
  //       body:
  //         "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //     },
  //   ];
};
