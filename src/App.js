import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./layout/MainLayout";
import { Fragment, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  let Layout = MainLayout;
  return (
    <Router>
      <div className="Netflix">
        <Routes>
          {publicRoutes.map((route, index) => {
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
                  <Layout>
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
