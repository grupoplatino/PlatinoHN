import Footer from './components/footer';
import NavBar from './components/navbar';
import {
  HashRouter,
} from "react-router-dom";
import { useEffect } from 'react';
import ScrollToTop from './utils/scroll-to-top';
import RoutesConfig from './routes/route-config';


function App() {
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <HashRouter>
      <NavBar />
      <RoutesConfig/>
      <Footer /> 
    </HashRouter>
  );
}

export default App;
