import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FontSizeProvider } from "./context/FontSizeContext";
import { ModalProvider } from "./context/ModalsContext";
import { ScrollProvider } from "./context/ScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TipoCadastroProvider } from "./context/TipoCadastroContext";
import MainRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <FontSizeProvider>
          <ScrollProvider>
            <TipoCadastroProvider>
              <BrowserRouter>
                <ModalProvider>
                  <MainRoutes />
                </ModalProvider>
              </BrowserRouter>
            </TipoCadastroProvider>
          </ScrollProvider>
        </FontSizeProvider>
      </ThemeProvider>
  </React.StrictMode>
);
