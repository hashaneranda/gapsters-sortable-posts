/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Action Item Componenet
 * Date: 03-10-2020
 */

import React from "react";

const ActionItem = ({ title = "", handleTimeTravel = () => {} }) => {
  return (
    <div className="flex flex-row items-center max-w-full p-6 mx-auto mb-1 bg-white rounded-lg shadow-xl">
      <h2 className="flex-grow leading-tight text-gray-900 text-l">{title}</h2>

      <button
        className="p-2 ml-3 text-white transition duration-500 ease-in-out transform bg-green-400 rounded hover:bg-green-600 hover:-translate-y-1 hover:scale-110"
        onClick={() => handleTimeTravel()}
        data-testid="button"
      >
        Time travel
      </button>
    </div>
  );
};

export default ActionItem;
