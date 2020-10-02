/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Post Componenet
 * Date: 03-10-2020
 */

import React from "react";

//assets
import { downArrow } from "config/Images";

//styles
import "./post.css";

const Post = ({
  id = "",
  isStart = false,
  isEnd = false,
  buttonUp = () => {},
  buttonDown = () => {},
}) => {
  return (
    <div className="flex flex-row items-center max-w-md p-6 mx-auto my-3 transition duration-500 ease-in-out transform bg-white rounded-lg shadow-xl hover:scale-110">
      <h1
        className="flex-grow text-xl leading-tight text-gray-900"
        data-testid="title"
      >
        Post {id}
      </h1>
      <div className="flex-grow-0">
        {!isStart && (
          <img
            src={downArrow}
            alt="arrow"
            className="w-4 mb-5 transform rotate-180 action__icon"
            data-testid="button-up"
            onClick={() => buttonUp(id)}
          />
        )}
        {!isEnd && (
          <img
            src={downArrow}
            alt="arrow"
            className="w-4 action__icon"
            data-testid="button-down"
            onClick={() => buttonDown(id)}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
