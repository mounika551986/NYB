import useTheme from "../../customhook_28-07-2026/useTheme";

function ThemeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "pink" : "blue",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h2>{theme} Theme</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeComponent;