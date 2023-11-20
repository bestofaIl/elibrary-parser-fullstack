import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "../lib/ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

const ThemeProvider: FC = ({children}) => {

    console.log("rendered");
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps: ThemeContextProps = useMemo(() => ({
        theme,
            setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;