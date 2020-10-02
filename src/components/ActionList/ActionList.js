/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version: 1.0.0
 * Description: Action List Componenet
 * Date: 03-10-2020
 */

import React from "react";

const ActionList = ({ title = "" }) => {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-xl text-gray-900 leading-tight">{title}</h1>
    </div>
  );
};

export default ActionList;
