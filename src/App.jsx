import React, { useState, createContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { GlobalContext } from "./context";
import Home from "./components/Home";
import TitleBar from "./components/TitleBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";
import Cart from "./components/Cart";
const Context = React.createContext();
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Shampoo 1",
      description: "This a good shampoo",
      price: 200,
      image:
        "https://static.vecteezy.com/system/resources/previews/006/779/193/original/shampoo-bottle-icon-illustration-hair-hygiene-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
    },
    {
      id: 2,
      name: "Shampoo 2",
      description: "This a good shampoo",
      price: 290,
      image:
        "https://static.vecteezy.com/system/resources/previews/006/779/193/original/shampoo-bottle-icon-illustration-hair-hygiene-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
    },
    {
      id: 3,
      name: "Shampoo 3",
      description: "This a good shampoo",
      price: 220,
      image:
        "https://static.vecteezy.com/system/resources/previews/006/779/193/original/shampoo-bottle-icon-illustration-hair-hygiene-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
    },
    {
      id: 4,
      name: "Shampoo 4",
      description: "This a good shampoo",
      price: 300,
      image:
        "https://static.vecteezy.com/system/resources/previews/006/779/193/original/shampoo-bottle-icon-illustration-hair-hygiene-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
    },
    {
      id: 5,
      name: "Shampoo 5",
      description: "This a good shampoo",
      price: 300,
      image:
        "https://static.vecteezy.com/system/resources/previews/006/779/193/original/shampoo-bottle-icon-illustration-hair-hygiene-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-wallpaper-background-free-vector.jpg",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  function updateCart(id, task) {
    //task 0 means add prodcut
    //task 1 means remove product
    if (task === 0) {
      let targetProduct = products.find((product) => product.id === id);
      if (cart.find((item) => item.id === targetProduct.id)) {
        setCart(
          cart.map((item, index) => {
            if (item.id === targetProduct.id) {
              item.quantity++;
            }
            return item;
          })
        );
      } else {
        targetProduct.quantity = 1;
        setCart([...cart, targetProduct]);
      }
    } else if (task === 1) {
      let tempCart = [...cart];
      const cartIndex = cart.findIndex((item) => item.id === id);
      if (cartIndex > -1) {
        if (tempCart[cartIndex].quantity > 1) {
          tempCart[cartIndex].quantity = tempCart[cartIndex].quantity - 1;
        } else {
          tempCart.splice(cartIndex, 1);
        }
      }
      setCart([...tempCart]);
    }
  }
  const value = {
    cart,
    updateCart,
    products,
    setProducts,
    user,
    setUser,
  };

  return (
    <div className="wrapper  bg-slate-100">
      <BrowserRouter>
        <GlobalContext.Provider value={value}>
          <TitleBar />
          <Routes>
            <Route path={APP_ROUTES.HOME} element={<Home />} />
            <Route path={APP_ROUTES.LOGIN} element={<h1>LOGIN</h1>} />
            <Route path={APP_ROUTES.REGISTER} element={<h1>Register</h1>} />
            <Route path={APP_ROUTES.CART} element={<Cart />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
