import UseForm from "../../customhook_28-07-2026/UseForm";

function ContactForm() {
  const { values, handleChange, resetForm } = UseForm({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(values);

    resetForm();
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input
      
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
      
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button>Submit</button>
    </form>
  );
}

export default ContactForm;