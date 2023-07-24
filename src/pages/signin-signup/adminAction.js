import { toast } from 'react-toastify';
import { postNewAdmin } from '../../helper/axios';

export const createNewAdminAction = async (obj) => {
  const pendingResponse = postNewAdmin(obj);
  toast.promise(pendingResponse, {
    pending: 'Please wait',
  });

  const { status, message } = await pendingResponse;
  toast[status](message);
};
