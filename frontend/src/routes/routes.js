import { createBrowserRouter } from "react-router-dom";

import HelloWorld from "../screens/HelloWorld";
import Loginpage from "../screens/Loginpage";
import Signup from "../screens/Signup";
import Lab from "../screens/Lab";
import FloorPlan from "../screens/FloorPlan";
import Floors from "../screens/Floors";
import Trial from "../screens/Trial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />, 
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Lab",
    element: <Lab />, 
  },
  {
    path: "/Floorplan",
    element: <FloorPlan />, 
  },
  {
    path: "/Floors",
    element: <Floors />, 
  },
  {
    path: "/Trial",
    element: <Trial />, 
  },
]);


export default router;