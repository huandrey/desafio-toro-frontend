import React from 'react';
import { ToastContainer as ToastWrapper } from 'react-toastify';

function ToastContainer() {
  return (
    <ToastWrapper
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default ToastContainer;
