import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PreHeader from "./components/Pre-header/PreHeader";
import ClientPage from "./pages/ClientPage/ClientPage";
import Register from "./pages/Register/Register";
import { getItem } from "./utils/storage";
import sairPreto from "./assets/sair-preto.png";
import sairBranco from "./assets/sair-branco.png";
import { useTheme } from "./context/ThemeContext";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  const userName = getItem("usuario");
  const { theme } = useTheme();

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <PreHeader />
            <Header userName="Área do cliente" />
          </>
        }
      >
        <Route path="" element={<App />} />
      </Route>

      <Route
        path="/"
        element={
          <>
            <PreHeader />
            <Header userName="Área do cliente" />
          </>
        }
      >
        <Route path="" element={<App />} />
      </Route>

      <Route
        path="/login"
        element={
          <>
            <PreHeader />
            <Header userName="Área do cliente" />
          </>
        }
      >
        <Route path="" element={<Login />} />
      </Route>

      <Route
        path="/register"
        element={
          <>
            <PreHeader />
            <Header userName="Área do cliente" />
          </>
        }
      >
        <Route path="" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes redirectTo="/login" />}>
        <Route
          path="/client"
          element={
            <>
              <PreHeader />
              <Header
                userName={userName}
                sairIcone={
                  theme === "light" ? sairPreto : sairBranco
                }
              />
            </>
          }
        >
          <Route path="" element={<ClientPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
