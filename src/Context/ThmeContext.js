import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { themeReducer } from "../Context/Reducer/Theme.Reducer";


export const ThemeContext = createContext();

const initval = {
    theme: 'light'
}

const ToggleThemecontext = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initval);

    const toggle_theme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}

        >
            {children}

        </ThemeContext.Provider>
    )
}

export default ToggleThemecontext;