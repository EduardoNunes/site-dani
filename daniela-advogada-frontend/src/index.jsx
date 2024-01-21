import React from "react";
import ReactDOM from "react-dom/client";
import { FontSizeProvider } from "./context/FontSizeContext";
import { ScrollProvider } from "./context/ScrollContext";
import { ThemeProvider } from "./context/ThemeContext";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalsContext";
import GlobalContextProvider from "./context/GlobalContextProvider";
import { TipoCadastroProvider } from "./context/TipoCadastroContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  </React.StrictMode>
);
