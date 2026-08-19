import { useContext } from "react";
import { ThemeContext } from "../../pages_07-07-2026/contexpage_19-08-2026/ThemeContext";


function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <h1>Welcome to My Application</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <p>
        This component gets the theme directly from Context.
      </p>
    </div>
  );
}

export default Home;