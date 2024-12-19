import { useState, createContext } from "react";
export const ContextApi = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [openModalMobile, setOpenModalMobile] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  const [popupMessage, setPopupMessage] = useState<any>({
    isVisible: false,
    message: "",
    severity: "",
  });

  return (
    <ContextApi.Provider
      value={{
        popupMessage,
        setPopupMessage,
        openModalMobile,
        setOpenModalMobile,
        isWrongModalOpen,
        setIsWrongModalOpen,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
