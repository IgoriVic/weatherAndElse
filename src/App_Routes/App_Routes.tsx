import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from '../components/First_Page_Component/LoginPage';
import MainPage from '../components/MainPage/MainPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='main-page' element={<MainPage />} />
        </Routes>
    )
};

export default AppRoutes;