import Home from "~/pages/Home";
import Guest from "~/pages/Guest";
import SignIn from "~/pages/SignIn";
import config from "~/config";
import Profile from "~/pages/Profile";
import HeaderOnly from "~/layout/HeaderOnly";
import MyList from "~/pages/MyList";
import ActionMovie from "~/pages/Type/ActionMovie";
import ComedyMovie from "~/pages/Type/ComedyMovie";
import HorrorMovie from "~/pages/Type/HorrorMovie";
import RomanceMovie from "~/pages/Type/RomanceMovie";
import DocumentariesMovie from "~/pages/Type/Documentaries";

import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;

export const PublicRoutes = ({ user }) => {
  return user ? <Navigate to="/home" replace /> : <Outlet />;
};

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
];
const privateRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.mylist,
    component: MyList,
  },
  {
    path: config.routes.action,
    component: ActionMovie,
  },
  {
    path: config.routes.comedy,
    component: ComedyMovie,
  },
  {
    path: config.routes.horror,
    component: HorrorMovie,
  },
  {
    path: config.routes.romance,
    component: RomanceMovie,
  },
  {
    path: config.routes.documentaries,
    component: DocumentariesMovie,
  },
];

export { privateRoutes, publicRoutes };
