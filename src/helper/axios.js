import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + '/admin';
const categoryAPI = rootAPI + '/category';
const paymentAPI = rootAPI + '/payment-options';
const productAPI = rootAPI + '/products';

const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
};
const getRefreshJWT = () => {
  return localStorage.getItem('refreshJWT');
};

const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();
  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === 'jwt expired'
    ) {
      // Get new accessJWT
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === 'success' && accessJWT) {
        sessionStorage.setItem('accessJWT', accessJWT);
      }
      //
      return axiosProcessor({
        method,
        url,
        obj,
        isPrivate,
        refreshToken,
      });
    }
    return {
      status: 'error',
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};

// =================== Admin API ==================

export const postNewAdmin = (data) => {
  const obj = {
    method: 'post',
    url: adminAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};
export const signInAdmin = (data) => {
  const obj = {
    method: 'post',
    url: adminAPI + '/sign-in',
    obj: data,
  };
  return axiosProcessor(obj);
};

export const postVerifyNewAdminInfo = (data) => {
  const obj = {
    method: 'post',
    url: adminAPI + '/admin-verification',
    obj: data,
  };
  return axiosProcessor(obj);
};

export const getAdminInfo = () => {
  const obj = {
    method: 'get',
    url: adminAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const signoutAdmin = (_id) => {
  const obj = {
    method: 'post',
    url: adminAPI + '/signout',
    obj: { _id, accessJWT: getAccessJWT(), refreshJWT: getRefreshJWT() },
  };
  return axiosProcessor(obj);
};

// ================== Category API ===================

export const postNewCategory = (data) => {
  const obj = {
    method: 'post',
    url: categoryAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getCategories = () => {
  const obj = {
    method: 'get',
    url: categoryAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: 'put',
    url: categoryAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: 'delete',
    url: categoryAPI + '/' + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// ================= Get New AccessJWT =========

export const getNewAccessJWT = () => {
  const obj = {
    method: 'get',
    url: adminAPI + '/get-accessjwt',
    refreshToken: true,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// Payment API
export const postNewPayment = (data) => {
  const obj = {
    method: 'post',
    url: paymentAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const getAllPayments = () => {
  const obj = {
    method: 'get',
    url: paymentAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const updatePaymentOption = (data) => {
  const obj = {
    method: 'put',
    url: paymentAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

export const deletePaymentOption = (_id) => {
  const obj = {
    method: 'delete',
    url: paymentAPI + '/' + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};

// =========== Product =======
export const postNewProduct = (data) => {
  const obj = {
    method: 'post',
    url: productAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const updateProduct = (data) => {
  const obj = {
    method: 'put',
    url: productAPI,
    obj: data,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const getProducts = (_id) => {
  const obj = {
    method: 'get',
    url: _id ? productAPI + '/' + _id : productAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const deleteProduct = (_id) => {
  const obj = {
    method: 'delete',
    url: productAPI + '/' + _id,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
