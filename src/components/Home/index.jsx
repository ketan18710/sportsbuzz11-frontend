import React from "react";
import { GlobalContext } from "../../context";
import ProductCard from "../common/ProductCard";

const Home = (props) => {
  const { user, setUser, cart, products } = React.useContext(GlobalContext);
  console.log(props);
  return (
    <div className="Home h-[100vh] overflow-x-hidden overflow-y-auto">
      <div className="banner">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="latestProducts p-4">
        <h1 className="text-3xl text-gray-700 my-3">Latest Products</h1>
        <div className="productsList overflow-x-scroll whitespace-nowrap">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
      <div className="specialProducts p-4">
        <h1 className="text-3xl text-gray-700 my-3">Special Products</h1>
        <div className="productsList overflow-x-scroll whitespace-nowrap">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
