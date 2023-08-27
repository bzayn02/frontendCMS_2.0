import { getAllAdmins } from '../../helper/axios';
import { setAllAdmins } from './adminSlice';

export const getAllAdminsAction = () => async (dispatch) => {
  const { status, adminUsers } = await getAllAdmins();

  if (status === 'success') {
    dispatch(setAllAdmins(adminUsers));
  }
};
