import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./App.scss";
import { publicRouter } from "./routes";
import { DefaultLayout} from "./layout"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {publicRouter.map((route, index) => {
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <route.element />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
