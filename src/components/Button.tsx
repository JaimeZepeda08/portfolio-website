"use client";

import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-fit my-10 border-2 border-green-800/50 text-green-600 rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:text-white hover:bg-green-800/50 cursor-pointer"
    >
      {text}
    </div>
  );
};

export default Button;
