import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes, {
  publicRoutes,
  privateRoutes,
  PublicRoutes,
} from "./routes";
import MainLayout from "./layout/MainLayout";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="Netflix">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<PublicRoutes user={user} />}>
            {publicRoutes.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout path={route.path}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
          <Route element={<ProtectedRoutes user={user} />}>
            {privateRoutes.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout path={route.path}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
