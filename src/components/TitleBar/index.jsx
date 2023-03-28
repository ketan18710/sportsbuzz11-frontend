import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { redirect, useNavigate } from "react-router-dom";
const TitleBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-12 px-4 bg-blue-500 grid grid-cols-4 text-white items-center justify-start">
      <h1
        onClick={() => navigate("/")}
        className="text-lg m-0 col-span-1 cursor-pointer "
      >
        SHAMPOO SHOP
      </h1>
      <button
        onClick={() => navigate("/login")}
        className="border-solid border-1 text-end col-span-1 border-blue-200 "
      >
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        className="border-solid border-1 text-end  col-span-1 border-blue-200 "
      >
        Register
      </button>
      <div className="col-span-1 flex items-center justify-center">
        <AiOutlineShoppingCart
          onClick={() => navigate("/cart")}
          className=" text-xl"
        />
      </div>
    </div>
  );
};

export default TitleBar;
