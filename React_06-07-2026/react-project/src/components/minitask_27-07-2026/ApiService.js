import axios from "axios";

// Public API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Reusable API Function
export const getEmployees = async () => {
    return await axios.get(API_URL);
};
