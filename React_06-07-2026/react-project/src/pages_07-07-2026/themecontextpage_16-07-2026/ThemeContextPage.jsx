import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ThemeButton from "../../components/context_16-07-2026/ThemeButton";

function ThemeContextPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: theme === "Light" ? "#f5f5f5" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <h2>Navbar</h2>
      <h3>Current Theme : {theme}</h3>

      <ThemeButton />
    </div>
  );
}

export default ThemeContextPage;