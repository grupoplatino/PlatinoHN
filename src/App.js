import Footer from './components/footer';
import NavBar from './components/navbar';
import {
  Route,
  HashRouter,
  Routes
} from "react-router-dom";
import Financing from './pages/financing/financing';
import Contact from './pages/contact/contact';
import { useEffect } from 'react';
import { AboutUsPage } from './pages/about-us';
import { CompaniesPage } from './pages/companies';
import { HomePage } from './pages/home';


function App() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUsPage/>}/>
        <Route path="/companies" element={<CompaniesPage/>}/>
        <Route path="/financing" element={<Financing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer /> 
    </HashRouter>
  );
}

export default App;
