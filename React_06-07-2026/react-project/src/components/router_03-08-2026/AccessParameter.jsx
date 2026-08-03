import { Routes, Route } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <Routes>
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default App;