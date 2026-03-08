import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
