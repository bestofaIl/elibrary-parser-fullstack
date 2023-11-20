import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss";
import MainPage from "../pages/MainPage/ui/MainPage";
import {AboutPageAsync} from "../pages/AboutPage/ui/AboutPage.async";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
    const {theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={"Loading"}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
