import React from "react";
import { GlobalContext } from "../../context";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const Cart = (props) => {
  const { cart, updateCart } = React.useContext(GlobalContext);
  console.log(cart);
  return (
    <div className="w-full h-fit min-h-[100vh] p-4">
      <h2 className="text-3xl my-6">Here is your cart</h2>
      <div className="cards">
        {cart.map((item) => (
          <div className="w-[500px] my-4 shadow-md flex items-start justify-start ">
            <img
              src={item.image}
              className=" w-[20%] h-[100px] object-cover"
              alt=""
            />
            <div className="details w-[80%] h-full flex items-center justify-start flex-col p-2 px-6">
              <h3 className="text-lg w-full flex items-center justify-between ">
                <span className="innerWrapper ">
                  {item.name}
                  <span className="text-gray-400">
                    {"  ($" + item.price + ")"}
                  </span>
                </span>
                <span className="ml-auto">QTY : {item.quantity}</span>
              </h3>
              <div className="actionBar w-full mt-4   flex items-center justify-start gap-2">
                <AiFillPlusCircle
                  onClick={() => updateCart(item.id, 0)}
                  className="text-xl"
                />
                <AiFillMinusCircle
                  onClick={() => updateCart(item.id, 1)}
                  className="text-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
