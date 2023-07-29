import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + '/admin';
const categoryAPI = rootAPI + '/category';

const axiosProcessor = async ({ method, url, obj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
    });
    return data;
  } catch (error) {
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

// ================== Category API ===================

export const postNewCategory = (data) => {
  const obj = {
    method: 'post',
    url: categoryAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};
export const getCategories = () => {
  const obj = {
    method: 'get',
    url: categoryAPI,
  };
  return axiosProcessor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: 'put',
    url: categoryAPI,
    obj: data,
  };
  return axiosProcessor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: 'delete',
    url: categoryAPI + '/' + _id,
  };
  return axiosProcessor(obj);
};
