import { useState } from "react";

function FormErrors() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validate() {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert("Form Submitted Successfully");
  }

  return (
    <form onSubmit={handleSubmit}>
<h2>Form Errors</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>
<h2>Error forms</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.phone}</p>

      <button type="submit">Submit</button>

    </form>
  );
}

export default FormErrors;