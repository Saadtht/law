import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { CustomRoute } from "../components";
import { 
    Login,
    MainPage,
} from "../pages";

const MainNavigator = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                    <CustomRoute path="/" showheader  component={MainPage} />
                }
                />
                <Route
                    path="/login"
                    element={
                    <CustomRoute path="/login" component={Login} />
                }
                />
            </Routes>
        </Router>
    );
}

export default MainNavigator;
