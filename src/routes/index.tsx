import HomePage from "../pages/home";
import Profile from "../pages/profile";
import Booking from "../pages/booking";
import NullLayout from "../pages/nullLayout";

export const publicRouter = [
  {
    path: "/",
    element: HomePage,
    layout: "",
  },
  {
    path: "/profile",
    element: Profile,
    layout: "",
  },
  {
    path: "/nullLayout",
    element: NullLayout,
    layout: null,
  },
];

export const privateRouter = [];