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
    SignupForm,
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
                    <CustomRoute path="/login" showheader component={Login} />
                }
                />
                <Route
                    path="/inscription"
                    element={
                    <CustomRoute path="/inscription" showheader component={SignupForm} />
                }
                />
            </Routes>
        </Router>
    );
}

export default MainNavigator;
