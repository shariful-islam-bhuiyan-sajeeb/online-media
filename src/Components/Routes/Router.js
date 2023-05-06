import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Signin from "../Authentication/Signin";
import SignUp from "../Authentication/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signUP",
    element: <SignUp />,
  },
]);
