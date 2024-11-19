import axios from "axios";

const apiUrl = "https://panel.custompedia.agency/api";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
  });

  instance.defaults.headers.common["Content-Type"] = "application/json";

  return instance;
};

//PROJECT
export const getProject = async (page) => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get(`/project?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

export const getProjectDetail = async (projectId) => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get(`/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project details:", error);
    throw error;
  }
};

//POST
export const getPost = async () => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get('/post');
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const getPostDetail = async (postId) => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project details:", error);
    throw error;
  }
};


//CATEGORIES
export const getCategory = async () => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

export const getkategoris = async () => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get("/kategoris");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

export const getCategoryDetails = async (categoryId) => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance.get(`/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category details:", error);
    throw error;
  }
};
