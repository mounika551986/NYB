import { useNavigate } from "react-router-dom";

function PassNavigate() {

  const navigate = useNavigate();

  const sendData = () => {

    navigate("/contact", {

      state: {

        name: "John",
        city: "Delhi",
        age: 28

      }

    });

  };

  return (

    <button onClick={sendData}>

      Go to Contact

    </button>

  );

}

export default PassNavigate;