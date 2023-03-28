import React from "react";
import { GlobalContext } from "../../../context";
import { redirect } from "react-router-dom";

const ProductCard = (props) => {
  const { image, name, description, price, id } = props;
  const { user, setUser, cart, products, updateCart } =
    React.useContext(GlobalContext);
  return (
    <div
      key={id}
      className="productCard inline-block mx-1 w-[250px] h-[300px]  "
    >
      <img src={image} alt="" className="rounded-t-lg w-full h-[50%]" />
      <div className="productDetails rounded-b-lg bg-white w-full h-[50%] px-4 py-2">
        <h2 className="text-xl text-red-500">{name}</h2>
        <h4 className="text-md text-gray-400">$ {price}</h4>
        <p onClick={() => redirect("/about")} className="text-lg">
          {description}
        </p>
        <button
          onClick={() => updateCart(id, 0)}
          className="shadow-md border-solid border-1 border-blue-200 my-2 py-2  px-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
