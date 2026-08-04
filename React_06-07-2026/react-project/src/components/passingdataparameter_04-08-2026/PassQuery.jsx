import { Link } from "react-router-dom";

function PassQuery() {

  return (
<div>
    <h1>Query Parameter</h1>
    <Link to="/QueryPass?name=Mounika&city=Hyderabad">

      Contact

    </Link>
</div>
  );

}

export default PassQuery;
