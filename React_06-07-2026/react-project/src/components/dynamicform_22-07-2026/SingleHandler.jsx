import { useState } from "react";

function SingleHandler() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <h2>Student Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleChange}
      />
      <br /><br />

      <h3>Entered Data</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>City: {formData.city}</p>
    </div>
  );
}

export default SingleHandler;