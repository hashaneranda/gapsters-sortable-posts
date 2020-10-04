/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Post List Componenet
 * Date: 03-10-2020
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//compoenents
import Post from "components/Post/Post";
import { TimeTravelLoader } from "components/Loader/Loader";

//redux actions
import {
  fetchPost,
  moveUpPost,
  moveDownPost,
  addToActionStack,
} from "features/posts/postSlice";

//utils
import { swapArrayElements } from "./utils/ArrayHelpers";

const PostList = ({ className = "" }) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  /**
   * Handle Post button click event
   *
   * @param {string} id
   * @param {string} action
   */
  const handleButtonClick = (id, action, postId) => {
    console.log("action licked", action, " on id: ", id);

    if (action === "up") {
      const newList = swapArrayElements([...postList.data], id - 1, id);
      const action = `Moved post ${postId} from index ${id} to index ${id - 1}`;

      dispatch(addToActionStack({ action, order: postList.data }));
      dispatch(moveUpPost(newList));
    } else if (action === "down") {
      const newList = swapArrayElements([...postList.data], id, id + 1);
      const action = `Moved post ${postId} from index ${id} to index ${id + 1}`;

      dispatch(addToActionStack({ action, order: postList.data }));
      dispatch(moveDownPost(newList));
    }
  };

  return (
    <div data-testid="post-list" className={`container mx-auto ${className}`}>
      <h1 className="text-4xl leading-loose text-white ">Sortable Post List</h1>

      {postList.timeTraveling ? (
        <div className="flex items-center justify-center w-full min-h-full h-150">
          <TimeTravelLoader />
        </div>
      ) : (
        postList.data &&
        postList.data.map((item, index) => (
          <Post
            key={item.id}
            id={item.id}
            isStart={index === 0}
            isEnd={index === postList.data.length - 1}
            buttonUp={() => handleButtonClick(index, "up", item.id)}
            buttonDown={() => handleButtonClick(index, "down", item.id)}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
