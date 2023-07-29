import { toast } from 'react-toastify';
import {
  deleteCategory,
  getCategories,
  postNewCategory,
  updateCategory,
} from '../../helper/axios';
import { setCategories } from './categorySlice';
import { setModalShow } from '../../system/systemSlice';

export const addNewCategoryAction = (obj) => async (dispatch) => {
  const { status, message } = await postNewCategory(obj);

  toast[status](message);

  if (status === 'success') {
    dispatch(getCategoriesAction());
  }
};

export const getCategoriesAction = () => async (dispatch) => {
  const { status, result } = await getCategories();

  if (status === 'success') {
    dispatch(setCategories(result));
  }
};
export const updateCategoryAction = (obj) => async (dispatch) => {
  const responsePending = updateCategory(obj);
  toast.promise(responsePending, {
    pending: 'Please Wait...',
  });
  const { status, message } = await responsePending;
  toast[status](message);

  if (status === 'success') {
    dispatch(setModalShow(false));
    dispatch(getCategoriesAction());
  }
};
export const deleteCategoryAction = (_id) => async (dispatch) => {
  const responsePending = deleteCategory(_id);
  toast.promise(responsePending, {
    pending: 'Please Wait...',
  });
  const { status, message } = await responsePending;
  toast[status](message);

  if (status === 'success') {
    dispatch(setModalShow(false));
    dispatch(getCategoriesAction());
  }
};
