import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { CustomRoute } from "../components";
import { 
    MainPage,
} from "../pages";

const MainNavigator = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                    <CustomRoute path="/" component={MainPage} />
                    }
                />
            </Routes>
        </Router>
    );
}

export default MainNavigator;
