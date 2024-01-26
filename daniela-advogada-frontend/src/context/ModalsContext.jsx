import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [openProcessDetails, setOpenProcessDetails] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [openUserEdit, setOpenUserEdit] = useState(false);

  function handleOpenProcessDetails(openClose, processo) {
    setSelectedProcess(processo);
    setOpenProcessDetails(openClose);
  }

  function handleClickOpenSettings(openClose) {    
    setOpenUserEdit(openClose);    
  }

  return (
    <ModalContext.Provider
      value={{
        handleOpenProcessDetails,
        openProcessDetails,
        selectedProcess,
        handleClickOpenSettings,
        openUserEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
