import { createBrowserRouter } from "react-router-dom";
//import Homepage from "../screens/Homepage";
import HelloWorld from "../screens/HelloWorld";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import Navbar from "../screens/Navbar";
import Floors from "../screens/Floors";
import Stairs from "../screens/Stairs";
import Requirements from "../screens/Requirements";
import Labtwo from "../screens/Labtwo";
import Labone from "../screens/Labone";
import Labthree from "../screens/Labthree";



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
  {
    path: "/Stairs",
    element: <Stairs />,
  },
  {
    path: "/Requirements",
    element: <Requirements />,
  },
  {
    path: "/Labone",
    element: <Labone />,
  },
  {
    path: "/Labtwo",
    element: <Labtwo/>,
  },
  {
    path: "/Labthree",
    element: <Labthree/>,
  },
  
]);

export default router;