import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "../pages/about-us";
import { CompaniesPage } from "../pages/companies";
import { HomePage } from "../pages/home";
import { FinancingPage } from '../pages/financing';
import Contact from '../pages/contact/contact';

function RoutesConfig() {
    return (
    <Routes>
        <Route path="/aboutUs" element={<AboutUsPage/>}/>
        <Route path="/companies" element={<CompaniesPage/>}/>
        <Route path="/financing" element={<FinancingPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    );
}

export default RoutesConfig;