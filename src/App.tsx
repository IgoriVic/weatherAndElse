import React from 'react';
import InputField from './components/InputField';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./components/First_Page_Component/LoginPage";

const App: React.FC = () => {

  return (
    <div>
    <div>hhhhhhhhh</div>
    <Routes>
      {/* <Route element={<MainLayout />} */}
      <Route path='login-page' element={<LoginPage />} />
    </Routes>
    </div>
  );
};

export default App;
