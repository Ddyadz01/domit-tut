import { toast } from 'react-toastify';

export const Notification = (message, type) => {
  //   const types = {
  //     error: toast.error,
  //     success: toast.success,
  //   };
  return toast(message, { type: type });
};

export default Notification;
