import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import Provider from "./components/Providers/Provider";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
