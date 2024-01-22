import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import PreHeader from "./components/Pre-header/PreHeader";
import ClientPage from "./pages/ClientPage/ClientPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OfficePage from "./pages/office/OfficePage";
import { getItem } from "./utils/storage";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <PreHeader />
            <Header />
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
            <Header />
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
            <Header />
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
            <Header />
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
              <Header />
            </>
          }
        >
          <Route path="" element={<ClientPage />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoutes redirectTo="/home" />}>
        <Route
          path="/office"
          element={
            <>
              <PreHeader />
              <Header />
            </>
          }
        >
          <Route path="" element={<OfficePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
