import ThemeButton from "../../components/themecontext_13-07-2026/ThemeButton"
import ThemeContext from "./ThemeContext"

function ThemeContextPage(){
    const theme="Dark"
    return(
        <ThemeContext.Provider value={{theme}}>
            <ThemeButton/>
        </ThemeContext.Provider>
    )

}
export default ThemeContextPage;
