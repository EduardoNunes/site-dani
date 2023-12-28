import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PreHeader from "./components/Pre-header/PreHeader";
import ClientPage from "./pages/ClientPage/ClientPage";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes redirectTo="/login" />}>
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
    </Routes>
  );
}

export default MainRoutes;
