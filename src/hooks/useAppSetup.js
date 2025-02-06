import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Aos from "aos";
import "aos/dist/aos.css";

const useAppSetup = () => {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            if (document.readyState === "complete") {
                setLoading(false);
            } else {
                window.addEventListener("load", handleLoad);
            }
        };

        handleLoad();
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    const toggleTheme = newTheme => {
        setTheme(newTheme);
    };

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return { theme, toggleTheme, loading };
};

export default useAppSetup;
