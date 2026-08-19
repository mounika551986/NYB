import { useContext } from "react";
import { ThemeContext } from "../../pages_07-07-2026/contexpage_19-08-2026/ThemeContext";


function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h2>My Application</h2>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}

export default Navbar;