import Astro from '../components/Astro';
import Stars from '../components/Stars';
import Navbar from '../contents/Navbar/Navbar';
import Loader from '../components/Loader';
import useAppSetup from '../hooks/useAppSetup';


const NotFound = () => {
    const { theme, toggleTheme, loading } = useAppSetup();


    return (
        <div className="Index" data-theme={'dark'}>
            {loading && <Loader />}
            <Navbar toggleTheme={toggleTheme} theme={'dark'}/>
            <Stars star={150}
                Style={{ 
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: 'var(--StarsBG)'
            }}/>
            <Astro />
        </div>
    );
}

export default NotFound;