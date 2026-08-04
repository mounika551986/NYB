import { useSearchParams } from "react-router-dom";

function QueryPass() {

  const [searchParams] = useSearchParams();

  return (

    <div>

      <h2>Name : {searchParams.get("name")}</h2>

      <h2>City : {searchParams.get("city")}</h2>

    </div>

  );

}

export default QueryPass;