import Home from "~/pages/Home";
import Guest from "~/pages/Guest";
import SignIn from "~/pages/SignIn";
import config from "~/config";
import Profile from "~/pages/Profile";
import HeaderOnly from "~/layout/HeaderOnly";

const publicRoutes = [
  {
    path: config.routes.guest,
    component: Guest,
    layout: HeaderOnly,
  },
  {
    path: config.routes.login,
    component: SignIn,
    layout: HeaderOnly,
  },
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
