import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

// using for post api..........
export const postData = async (url, formData) => {
  try {
    const response = await axios.post(apiUrl + url, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return error.response?.data;
  }
};

// using for get api.........
export const fetchDataFromApi = async (url) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get(apiUrl + url, params);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// ........put api for uploadImage...............
export const uploadImage = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`, //include your api  key in the Authrization header
        "Content-Type": "multipart/form-data",
      },
    };

    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res) => {
      response = res;
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// ...........put edit data..............
export const editData = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    };

    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res) => {
      response = res;
    });
    return response;

    // const response = axios.put(apiUrl + url, updatedData, params);
    // return response.data;
  } catch (error) {
    return error?.response?.data || { message: error.message, error: true };
    console.log(error);
  }
};

// delete ..........

export const deleteData = async (url) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "application/json",
    },
  };

  const res = await axios.delete(apiUrl + url, params);
  // console.log(res);
  return res.data;
};
