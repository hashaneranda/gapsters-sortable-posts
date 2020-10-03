/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Action List Componenet
 * Date: 03-10-2020
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";

//componenets
import ActionItem from "components/ActionItem/ActionItem";

//redux actions
import { timeTravelToAction, setTimeTraveling } from "features/posts/postSlice";

const AnimatedActionItem = animated(ActionItem);

const ActionList = ({ className = "" }) => {
  const dispatch = useDispatch();
  const actionStack = useSelector((state) => state.posts.actionStack);

  const height = 120;
  const transitions = useTransition(
    [...actionStack].reverse().map((data, i) => ({ ...data, y: i * height })),
    (d) => d.action,
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );

  const handleTimeTravel = (action) => {
    dispatch(setTimeTraveling());

    const index = actionStack.findIndex((x) => x.action === action);

    const postOrder = actionStack[index].order;
    const newArr = [...actionStack].slice(0, index);

    setTimeout(function () {
      dispatch(timeTravelToAction({ actionStack: newArr, postOrder }));
    }, 500);
  };

  return (
    <div
      className={`flex flex-col max-w-full min-w-full mx-auto bg-gray-200  rounded-lg shadow-xl ${className}`}
    >
      <div className="p-5 bg-white">
        <h1
          className="flex-grow text-xl leading-tight text-gray-900"
          data-testid="title"
        >
          List of Actions commited
        </h1>
      </div>
      <div className="p-2 pb-1 mt-3">
        {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
          <AnimatedActionItem
            key={key}
            title={item.action}
            handleTimeTravel={() => handleTimeTravel(item.action)}
            style={{
              transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
              ...rest,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionList;
