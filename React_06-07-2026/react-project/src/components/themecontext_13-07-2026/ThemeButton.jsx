import { useContext } from "react";
import ThemeContext from "../../pages_07-07-2026/themecontextpage_13-07-2026/ThemeContext";

function ThemeButton(){
    const {theme}= useContext(ThemeContext)
    return(
        <button>
            Current Theme : {theme}
        </button>
    )
}
export default ThemeButton;
