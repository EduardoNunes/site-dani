import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import "./global.css";
import Home from "./pages/home/Home";
import "./styles.css";
import api from "./services/api";

function App() {
  const { theme } = useTheme();
  const [clientes, setClientes] = useState([]);

  async function loadClientes() {
    try {
      const response = await api.get("/clientes");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadClientes();
  }, []);

  return (
    <div className={`body-geral body-geral-${theme}`}>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
