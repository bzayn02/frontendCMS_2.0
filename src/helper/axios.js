import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + '/admin';
const categoryAPI = rootAPI + '/category';
const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
};

const axiosProcessor = async ({ method, url, obj, isPrivate }) => {
  try {
    const headers = {
      Authorization: isPrivate ? getAccessJWT() : null,
    };
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
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
export const getAdminInfo = () => {
  const obj = {
    method: 'get',
    url: adminAPI,
    isPrivate: true,
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
    isPrivate: true,
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
