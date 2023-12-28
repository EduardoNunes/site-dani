import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [openProcessDetails, setOpenProcessDetails] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);

  function handleOpenProcessDetails(openClose, processo) {
    setSelectedProcess(processo);
    setOpenProcessDetails(openClose);
  }

  return (
    <ModalContext.Provider
      value={{ handleOpenProcessDetails, openProcessDetails, selectedProcess }}
    >
      {children}
    </ModalContext.Provider>
  );
}
