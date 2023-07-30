import { toast } from 'react-toastify';
import { getAdminInfo, postNewAdmin, signInAdmin } from '../../helper/axios';
import { setAdmin } from './adminSlice';

export const createNewAdminAction = async (obj) => {
  const pendingResponse = postNewAdmin(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message } = await pendingResponse;
  toast[status](message);
};

export const signInAdminAction = (obj) => async (dispatch) => {
  const pendingResponse = signInAdmin(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message, token } = await pendingResponse;
  toast[status](message);

  if (status === 'success') {
    sessionStorage.setItem('accessJWT', token.accessJWT);
    localStorage.setItem('refreshJWT', token.refreshJWT);
    dispatch(getAdminProfileAction());
  }
};

// Get the user's data and mount in the state

export const getAdminProfileAction = () => async (dispatch) => {
  const { status, user } = await getAdminInfo();

  if (status === 'success') {
    dispatch(setAdmin(user));
  }
};
