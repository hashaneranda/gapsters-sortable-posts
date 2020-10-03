import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";

//compoenents
import Post from "components/Post/Post";

//redux actions
import {
  fetchPost,
  moveUpPost,
  moveDownPost,
  addToActionStack,
} from "features/posts/postSlice";

//utils
import { swapArrayElements } from "./utils/ArrayHelpers";

const AnimatedPost = animated(Post);

const PostList = ({ className = "" }) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  const height = 120;
  const transitions = useTransition(
    postList.data.map((data, i) => ({ ...data, y: i * height })),
    (d) => d.id,
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );

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

      dispatch(moveUpPost(newList));
      dispatch(addToActionStack({ action, order: postList.data }));
    } else if (action === "down") {
      const newList = swapArrayElements([...postList.data], id, id + 1);
      const action = `Moved post ${postId} from index ${id} to index ${id + 1}`;

      dispatch(moveDownPost(newList));
      dispatch(addToActionStack({ action, order: postList.data }));
    }
  };

  return (
    <div data-testid="post-list" className={`container mx-auto ${className}`}>
      <h1 className="text-2xl leading-loose">Sortable Post List</h1>

      {postList.data &&
        transitions.map(({ item, props: { y, ...rest }, key }, index) => (
          <AnimatedPost
            key={key}
            id={item.id}
            isStart={index === 0}
            isEnd={index === postList.data.length - 1}
            buttonUp={() => handleButtonClick(index, "up", item.id)}
            buttonDown={() => handleButtonClick(index, "down", item.id)}
            style={{
              transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
              ...rest,
            }}
          />
        ))}
    </div>
  );
};

export default PostList;
