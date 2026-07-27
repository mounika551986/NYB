import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET
export const getUsers = () => {
  return axios.get(API_URL);
};

// POST
export const addUser = (user) => {
  return axios.post(API_URL, user);
};

// PUT
export const updateUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

// DELETE
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};