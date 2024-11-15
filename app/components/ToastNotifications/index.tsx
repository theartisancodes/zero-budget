'use client';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const showError = (message: string): void => {
  toast.error(message, defaultOptions);
};

export const showSuccess = (message: string): void => {
  toast.success(message, defaultOptions);
};

export const showInfo = (message: string): void => {
  toast.info(message, defaultOptions);
};

export const showWarning = (message: string): void => {
  toast.warn(message, defaultOptions);
};

const ToastNotification = () => {
  return <ToastContainer />;
};

export default ToastNotification;
