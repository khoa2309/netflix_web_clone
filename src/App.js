import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./layout/MainLayout";
import { Fragment, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="Netflix">
        <Routes>
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
                    <Page user={user} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
