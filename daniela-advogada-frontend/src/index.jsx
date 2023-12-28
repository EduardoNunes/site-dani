import React from "react";
import ReactDOM from "react-dom/client";
import { FontSizeProvider } from "./context/FontSizeContext";
import { ScrollProvider } from "./context/ScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FontSizeProvider>
        <ScrollProvider>
          <BrowserRouter>
            <ModalProvider>
              <MainRoutes />
            </ModalProvider>
          </BrowserRouter>
        </ScrollProvider>
      </FontSizeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
