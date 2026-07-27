const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET
export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// POST
export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
};

// PUT
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
};

// DELETE
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
