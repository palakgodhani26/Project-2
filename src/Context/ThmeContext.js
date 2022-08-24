import { useReducer } from "react";
import { createContext } from "react";
import { ThemeReducer } from "./Reducer/Theme.Reducer";
import { TOGGLE_THEME } from "./ActionType";

export  const ThemeContext = createContext();

const initVal = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initVal);
}

const toggle_theme = (val) => {
    let newtheme = val === 'light' ? 'dark' : 'light';
    dispatch({ type: TOGGLE_THEME, payload: newtheme });
}

return (
    <ThemeContext.Provider
        value={{
            ...state,
            toggle_theme
         } }
    >
        {children}
    </ThemeContext.Provider>
)

export default ThemeContext;