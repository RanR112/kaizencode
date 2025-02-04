import { useEffect, useState } from 'react'
import Navbar from '../contents/Navbar/Navbar'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import About from '../contents/About/About'
import Footer from '../contents/Footer/Footer'
import useLocalStorage from 'use-local-storage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Loader from '../components/Loader'

function TentangKami() {
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
        <div>
            {loading && (
                <Loader />
            )}
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Whatsapp />
            <About />
            <Footer />
        </div>
    )
}

export default TentangKami
