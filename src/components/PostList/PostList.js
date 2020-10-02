import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTransition, a } from "react-spring";

//compoenents
import Post from "components/Post/Post";

//redux actions
import { fetchPost, moveUpPost, moveDownPost } from "features/posts/postSlice";

//utils
import { swapArrayElements } from "./utils/ArrayHelpers";

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.postList);

  const height = 50;
  //   const transitions = useTransition(
  //     rows.map((data, i) => ({ ...data, y: i * height })),
  //     d => d.name,
  //     {
  //       from: { position: "absolute", opacity: 0 },
  //       leave: { height: 0, opacity: 0 },
  //       enter: ({ y }) => ({ y, opacity: 1 }),
  //       update: ({ y }) => ({ y })
  //     }
  //   );

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  /**
   * Handle Post button click event
   *
   * @param {string} id
   * @param {string} action
   */
  const handleButtonClick = (id, action) => {
    console.log("action licked", action, " on id: ", id);

    if (action === "up") {
      const newList = swapArrayElements([...postList.data], id - 1, id);
      dispatch(moveUpPost(newList));
    } else if (action === "down") {
      const newList = swapArrayElements([...postList.data], id, id + 1);
      dispatch(moveDownPost(newList));
    }
  };

  return (
    <div data-testid="post-list" className="container mx-auto">
      <h1 className="text-2xl leading-loose">Sortable Post List</h1>

      {postList.data &&
        postList.data.map((data, index) => (
          <Post
            key={index}
            id={data.id}
            isStart={index === 0}
            isEnd={index === postList.data.length - 1}
            buttonUp={() => handleButtonClick(index, "up")}
            buttonDown={() => handleButtonClick(index, "down")}
          />
        ))}
    </div>
  );
};

export default PostList;
