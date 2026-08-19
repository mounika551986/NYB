import axios from "axios";



const GetAxios = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(response.data);
};

export default GetAxios;
