import { Link } from "react-router-dom";

function PassLink() {
  return (
    <div>

      <h1>Home Page</h1>

      <Link
        to="/PassContact"
        state={{
          name: "Mounika",
          city: "Hyderabad",
          age: 25
        }}
      >
        Go to Contact
      </Link>

    </div>
  );
}

export default PassLink;