import axios from "axios";

const BASE_URL = 'https://649d2ce59bac4a8e669d5355.mockapi.io';

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`)
    .then(response => response.data)
    .catch(error => console.error(error));
};
