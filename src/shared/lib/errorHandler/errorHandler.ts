import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  const errorMessage = 'Oops, something went wrong! Try again later!';

  console.error(error);

  toast.error(errorMessage, {
    autoClose: 3000,
    position: 'top-right',
  });
};