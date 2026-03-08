import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import Provider from "./components/Providers/Provider";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
