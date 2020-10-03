/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Loader Componenet
 * Date: 03-10-2020
 */

import React from "react";
import Lottie from "react-lottie";

//assets
import { timeClock } from "config/Lottie";

const lottieConfig = (file, loop = true) => {
  return {
    loop,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

export const TimeTravelLoader = ({
  height = 165,
  width = 151,
  infinite = true,
}) => {
  return (
    <Lottie
      options={lottieConfig(timeClock, infinite)}
      height={height}
      width={width}
      className="noReports"
    />
  );
};
