"use client";

import { createContext, useContext } from "react";
import { notification } from "antd";

const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [api, contextHolder] = notification.useNotification();

  const ErrorNotification = () => {
    api.open({
      message: "Upss, hubo un error",
      description: "Ocurrió un error inesperado, por favor intentelo más tarde",
      showProgress: true,
      pauseOnHover: true,
      className: "error-notification",
    });
  };

  const WarningNotification = (message, description) => {
    api.open({
      message,
      description,
      showProgress: true,
      pauseOnHover: true,
      className: "warning-notification",
    });
  };

  return (
    <NotificationContext.Provider
      value={{ ErrorNotification, WarningNotification }}
    >
      {children}
      {contextHolder}
    </NotificationContext.Provider>
  );
}

const useNotificationProvider = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotificationProvider };
