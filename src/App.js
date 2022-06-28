import './App.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import AboutUs from './pages/about-us/about-us';
import {
  Route,
  HashRouter,
  Routes
} from "react-router-dom";
import Hero from './pages/home/hero/hero';
import Financing from './pages/financing/financing';
import Contact from './pages/contact/contact';
import Companies from './pages/companies/companies';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/financing" element={<Financing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Hero/>}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
