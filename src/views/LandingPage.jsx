import { useEffect, useState } from 'react'
// import '../index.css'
import useLocalStorage from 'use-local-storage';

import Navbar from '../contents/Navbar/Navbar';
import Home from '../contents/Home/Home';
import Services from '../contents/Services/Services';
import Loader from '../components/Loader';
import About from '../contents/About/About';
import Pricing from '../contents/Pricing/Pricing';
import Footer from '../contents/Footer/Footer';
import Whatsapp from '../components/Whatsapp/Whatsapp';
import Aos from 'aos';
import 'aos/dist/aos.css'

function LandingPage() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            if (document.readyState === 'complete') {
                setLoading(false);
            } else {
                window.addEventListener('load', handleLoad);
            }
        };

        handleLoad();

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const toggleTheme = newTheme => {
        setTheme(newTheme);
    };

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <div className="LandingPage" data-theme={theme}>
            {loading && (
                <Loader />
            )}
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Whatsapp />
            <Home theme={theme}/>
            <About />
            <Services />
            <Pricing />
            <Footer />
        </div>
    )
}

export default LandingPage
