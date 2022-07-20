import Footer from './components/footer';
import NavBar from './components/navbar';
import {
  HashRouter,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import ScrollToTop from './utils/scroll-to-top';
import RoutesConfig from './routes/route-config';
import Splash from './utils/splash';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000)
    ScrollToTop();
  }, []);
  return (
    <HashRouter>
      {isLoading ? <div>
        <NavBar />
      <RoutesConfig/>
      <Footer /> 
      </div> : <Splash />}

    </HashRouter>
  );
}

export default App;
