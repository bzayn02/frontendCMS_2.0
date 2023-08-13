import {
  deleteProduct,
  getProducts,
  postNewProduct,
  updateProduct,
} from '../../helper/axios';
import { toast } from 'react-toastify';
import { setProducts } from './productSlice';

export const postNewProductAction = (data) => async (dispatch) => {
  const pending = postNewProduct(data);

  toast.promise(pending, {
    pending: 'Please wait',
  });

  const { status, message } = await pending;
  toast[status](message);
  if (status === 'success') {
    // fetch all the products
    dispatch(getProductsAction());
  }
};
export const updateProductAction = (data) => async (dispatch) => {
  const pending = updateProduct(data);

  toast.promise(pending, {
    pending: 'Please wait',
  });

  const { status, message } = await pending;
  toast[status](message);
  if (status === 'success') {
    // fetch all the products
    dispatch(getProductsAction());
    return true;
  }
  return false;
};

export const getProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();

  if (status === 'success') {
    // Mount data in store
    dispatch(setProducts(products));
  }
};

export const deleteProductAction = (_id) => async (dispatch) => {
  const pending = deleteProduct(_id);

  toast.promise(pending, {
    pending: 'Please wait...',
  });
  const { status, message } = await pending;

  if (status === 'success') {
    toast[status](message);
    // Mount data in store
    dispatch(getProductsAction());
    return true;
  }
  return false;
};
