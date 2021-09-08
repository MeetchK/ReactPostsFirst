import React from 'react';
import './Styles/app.css'
import {BrowserRouter, Redirect} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Redirect to="/error"/>
        </BrowserRouter>
    )
}

export default App;
