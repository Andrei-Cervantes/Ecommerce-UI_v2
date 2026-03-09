import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import Provider from "./components/Providers/Provider";
import { Toaster } from "./components/ui/sonner";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {AppRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </MainLayout>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
