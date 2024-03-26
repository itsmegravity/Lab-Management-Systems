import { createBrowserRouter } from "react-router-dom";
import Homepage from "../screens/Homepage";
import HelloWorld from "../screens/HelloWorld";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />, 
  },
]);


export default router;