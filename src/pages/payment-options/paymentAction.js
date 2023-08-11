import { toast } from 'react-toastify';
import {
  deletePaymentOption,
  getAllPayments,
  postNewPayment,
  updatePaymentOption,
} from '../../helper/axios';
import { setPaymentOptions } from './paymentSlice';
import { setModalShow } from '../../system/systemSlice';

export const addNewPaymentAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewPayment(obj);

  toast[status](message);

  if (status === 'success') {
    dispatch(getAllPaymentsAction());
  }
};

export const getAllPaymentsAction = () => async (dispatch) => {
  const { status, paymentOptions } = await getAllPayments();
  if (status === 'success') {
    dispatch(setPaymentOptions(paymentOptions));
  }
};

export const updatePaymentOptionAction = (obj) => async (dispatch) => {
  const responsePending = updatePaymentOption(obj);
  toast.promise(responsePending, {
    pending: 'Please Wait...',
  });
  const { status, message } = await responsePending;
  toast[status](message);

  if (status === 'success') {
    dispatch(setModalShow(false));
    dispatch(getAllPaymentsAction());
  }
};

export const deletePaymentOptionAction = (_id) => async (dispatch) => {
  const responsePending = deletePaymentOption(_id);
  toast.promise(responsePending, {
    pending: 'Please Wait...',
  });
  const { status, message } = await responsePending;
  toast[status](message);

  if (status === 'success') {
    dispatch(setModalShow(false));
    dispatch(getAllPaymentsAction());
  }
};
