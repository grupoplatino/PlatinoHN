import Footer from './components/footer';
import NavBar from './components/navbar';
import {
  Route,
  HashRouter,
  Routes
} from "react-router-dom";
import Contact from './pages/contact/contact';
import { useEffect } from 'react';
import { AboutUsPage } from './pages/about-us';
import { CompaniesPage } from './pages/companies';
import { HomePage } from './pages/home';
import { FinancingPage } from './pages/financing';
import ScrollToTop from './utils/scroll-to-top';


function App() {
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUsPage/>}/>
        <Route path="/companies" element={<CompaniesPage/>}/>
        <Route path="/financing" element={<FinancingPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer /> 
    </HashRouter>
  );
}

export default App;
