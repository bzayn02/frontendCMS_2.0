import { toast } from 'react-toastify';
import { postNewAdmin, signInAdmin } from '../../helper/axios';

export const createNewAdminAction = async (obj) => {
  const pendingResponse = postNewAdmin(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message } = await pendingResponse;
  toast[status](message);
};

export const signInAdminAction = async (obj) => {
  const pendingResponse = signInAdmin(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message, token } = await pendingResponse;
  toast[status](message);

  if (status === 'success') {
    sessionStorage.setItem('accessJWT', token?.accessJWT);
    localStorage.setItem('refreshJWT', token.refreshJWT);
  }
};
