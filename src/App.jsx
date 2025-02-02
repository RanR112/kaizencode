import { useEffect, useState } from 'react'
import './App.css'
import useLocalStorage from 'use-local-storage';

import Navbar from './contents/Navbar/Navbar';
import Home from './contents/Home/Home';
import Services from './contents/Services/Services';
import Loader from './components/Loader';
import About from './contents/About/About';
import Pricing from './contents/Pricing/Pricing';
import Footer from './contents/Footer/Footer';
import Whatsapp from './components/Whatsapp/Whatsapp';

function App() {
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
    return (
        <div className="App" data-theme={theme}>
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

export default App
