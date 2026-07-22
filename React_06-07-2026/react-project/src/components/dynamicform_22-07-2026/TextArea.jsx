import { useState } from "react";

function TextArea() {
  const [address, setAddress] = useState("");

  return (
    <div>

      <textarea
        rows="5"
        cols="30"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        placeholder="Enter Address"
      />

      <p>{address}</p>

    </div>
  );
}

export default TextArea;