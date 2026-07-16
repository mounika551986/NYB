import { useContext } from "react";
import ThemeContext from "../../pages_07-07-2026/themecontextpage_16-07-2026/ThemeContext";

function ThemeButton() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Theme : {theme}</h3>

      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeButton;
