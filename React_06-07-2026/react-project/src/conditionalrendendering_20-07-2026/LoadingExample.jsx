import { useEffect, useState } from "react";

function LoadingExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Loading State</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Data Loaded Successfully</h2>
      )}
    </div>
  );
}

export default LoadingExample;