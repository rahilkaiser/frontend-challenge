import './App.css'
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import {PersonalDetails} from "./components/PersonalDetails.tsx";
import {SalaryDetails} from "./components/SalaryDetails.tsx";
import {Summary} from "./components/Summary.tsx";
import {ProgressIndicator} from "./components/core/ProgressIndicator.tsx";

function App() {
    return (
        <BrowserRouter>
            <MainRoutes/>
        </BrowserRouter>
    )
}

const MainRoutes = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div>
            {!isHome && <ProgressIndicator/>}

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/personal-details" element={<PersonalDetails/>}/>
                <Route path="/salary-details" element={<SalaryDetails/>}/>
                <Route path="/summary" element={<Summary/>}/>
            </Routes>

        </div>
    );
};

export default App
