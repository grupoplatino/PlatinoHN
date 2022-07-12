import React, { useEffect } from 'react';
import ScrollToTop from '../../utils/scroll-to-top';
import FinancingHero from './components/financing-hero';
import StepsToFinancing from './components/steps-to-financing';

function Financing() {
    useEffect(() => {
        ScrollToTop();
    }, []);
    return (
        <div>
            <FinancingHero/>
            <StepsToFinancing/>
        </div>
    );
}

export default Financing;