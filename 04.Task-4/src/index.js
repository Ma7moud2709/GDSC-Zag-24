import * as React from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { CartProvider } from "react-use-cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'animate.css';
import AllHome from "./HomePage/AllHome";
import AllShop from "./ShopPage/AllShop";
import AllTrending from "./TrendingPage/AllTrending";
import AllContact from "./ContactPage/AllContact";
import CartPage from "./CartPage/CartPage";
import Shooter from "./ShopPage/Shooter";
import Strategy from "./ShopPage/Strategy";
import Racing from "./ShopPage/Racing";
import Mmorgp from "./ShopPage/Mmorgp";
import Cards from "./ShopPage/Cards";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignInPage/SignUpPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <AllHome />
  },
  {
    path: "/shop",
    element: <AllShop />
  },
  {
    path: "/contact",
    element: <AllContact />
  },
  {
    path: "/trending",
    element: <AllTrending />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/shooter",
    element: <Shooter />
  },
  {
    path: "/strategy",
    element: <Strategy />
  },
  {
    path: "/racing",
    element: <Racing />
  },
  {
    path: "/mmorgp",
    element: <Mmorgp />
  },
  {
    path: "/cards",
    element: <Cards />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },

]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);