import { useState } from "react";

function RegistrationForm() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    course: "",
    about: "",
    agree: false,
    profile: null,
  });

  const [errors, setErrors] = useState({});


  // Single Change Handler
  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  // Validation
  const validate = () => {

    let newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid Email required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Select Gender";
    }

    if (!formData.course) {
      newErrors.course = "Select Course";
    }

    if (!formData.agree) {
      newErrors.agree = "Accept Terms";
    }

    if (!formData.profile) {
      newErrors.profile = "Upload Profile";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Registration Successful");
      console.log(formData);
    }
  };

  return (
    

    <div style={{width:"500px",margin:"20px auto"}}>
        
      <h1>Registration Form</h1>
      

      <form onSubmit={handleSubmit}>

        {/* Full Name */}

        <label>Full Name</label><br/>

        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.fullname}</p>

        {/* Email */}

        <label>Email</label><br/>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.email}</p>

        {/* Password */}

        <label>Password</label><br/>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.password}</p>

        {/* Age */}

        <label>Age</label><br/>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.age}</p>

        {/* Gender */}

        <label>Gender</label><br/>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender==="Male"}
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender==="Female"}
          onChange={handleChange}
        /> Female

        <p style={{color:"red"}}>{errors.gender}</p>

        {/* Dropdown */}

        <label>Course</label><br/>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <p style={{color:"red"}}>{errors.course}</p>

        {/* Textarea */}

        <br/><br/>

        <label>About Yourself</label><br/>

        <textarea
          name="about"
          rows="4"
          cols="40"
          value={formData.about}
          onChange={handleChange}
        ></textarea>

        <br/><br/>

        {/* File */}

        <label>Upload Profile</label><br/>

        <input
          type="file"
          name="profile"
          onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.profile}</p>

        {/* Checkbox */}

        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />

        I Accept Terms & Conditions

        <p style={{color:"red"}}>{errors.agree}</p>

        <button type="submit">
          Register
        </button>

      </form>

      <hr/>

      <h2>Live Preview</h2>

      <p><b>Name:</b> {formData.fullname}</p>

      <p><b>Email:</b> {formData.email}</p>

      <p><b>Age:</b> {formData.age}</p>

      <p><b>Gender:</b> {formData.gender}</p>

      <p><b>Course:</b> {formData.course}</p>

      <p><b>About:</b> {formData.about}</p>

      <p>
        <b>Profile:</b>{" "}
        {formData.profile ? formData.profile.name : "No File"}
      </p>

    </div>
    
  );
}

export default RegistrationForm;
