import { createBrowserRouter } from "react-router-dom";
import HelloWorld from "../screens/HelloWorld";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import Navbar from "../screens/Navbar";
import Firstfloor from "../screens/Firstfloor";
import ITLab01 from "../screens/ITLab01";
import ITLab02 from "../screens/ITLab02";
import ITLab04 from "../screens/ITLab04";
import ITLab06 from "../screens/ITLab06";
import ITLab07 from "../screens/ITLab07";
import COMPSLab08 from "../screens/COMPSLab08.js";
import COMPSLab04 from "../screens/COMPSLab04.js";
import COMPSLab03 from "../screens/COMPSLab03.js";
import COMPSLab01 from "../screens/COMPSLab01.js";
import Requirements from "../screens/Requirements";
import Profile from "../screens/Profile";
import Homepage from "../screens/Homepage";
import Services from "../screens/Services";
import Aboutus from "../screens/Aboutus";
import Contact from "../screens/Contact";
import Secondfloor from "../screens/Secondfloor";
import Thirdfloor from "../screens/Thirdfloor";

const router = createBrowserRouter([
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />,
  },
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/Navbar",
    element: <Navbar />,
  },
  {
    path: "/Firstfloor",
    element: <Firstfloor />,
  },
  {
    path: "/ITLab01",
    element: <ITLab01 />,
  },
  {
    path: "/Req",
    element: <Requirements />,
  },

  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Homepage",
    element: <Homepage />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Secondfloor",
    element: <Secondfloor />,
  },
  {
    path: "/Thirdfloor",
    element: <Thirdfloor />,
  },
  {
    path: "/ITLab04",
    element: <ITLab04 />,
  },
  {
    path: "/ITLab06",
    element: <ITLab06 />,
  },
  {
    path: "/ITLab07",
    element: <ITLab07 />,
  },
  {
    path: "/COMPSLab08",
    element: <COMPSLab08 />,
  },
  {
    path: "/COMPSLab01",
    element: <COMPSLab01 />,
  },

  {
    path: "/COMPSLab03",
    element: <COMPSLab03 />,
  },
  {
    path: "/COMPSLab04",
    element: <COMPSLab04 />,
  },
  {
    path: "/ITLab02",
    element: <ITLab02 />,
  },
]);

export default router;

