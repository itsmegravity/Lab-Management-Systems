import { createBrowserRouter } from "react-router-dom";
//import Homepage from "../screens/Homepage";
import HelloWorld from "../screens/HelloWorld";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import Navbar from "../screens/Navbar";
import Floors from "../screens/Floors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />,
  },
  {
    path: "/SignupPage",
    element: <SignupPage />,
  },
  {
    path: "/Navbar",
    element: <Navbar />,
  },
  {
    path: "/Floors",
    element: <Floors />,
  },
]);

export default router;