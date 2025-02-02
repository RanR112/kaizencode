import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import "./navbar.css"
import LogoB from '../../assets/LogoB.png'
import LogoW from '../../assets/LogoW.png'
import Slider from '../../components/Slider';
import { CgMenuGridO } from "react-icons/cg";

const Navbar = ({ toggleTheme, theme }) => {
    const [active, setActive] = useState('nav')
    const [scroll, setScroll] = useState(false)
    // Fungsi untuk mengaktifkan navbar
    const showNav = () => {
        setActive('nav activeNav')
    }

    // Fungsi untuk menutup navbar
    const removeNavbar = () => {
        setActive('nav')
    }

    // Fungsi untuk mengubah navbar
    const changeColor = () => {
        if (window.scrollY >= 350) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
            if (active === 'nav activeNav') {
                document.body.classList.add('nav-open');
            } else {
                document.body.classList.remove('nav-open');
            }
        }, [active]);

    window.addEventListener('scroll', changeColor)
    return (
        <section className="Navbar" id='navbar'>
            <header className={scroll ? "header scroll flex" : "header flex"}>
            {/* <header className="header flex"> */}
                <div className="logoDiv flex">
                    <span className="logo flex">
                        <img src={theme !== 'dark' && scroll ? LogoB : LogoW} alt="logo" className='icon'/>
                    </span>
                </div>

                {active == 'nav activeNav' ? <div onClick={removeNavbar} className="layer"/> : ''}
                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="home" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="services" className="navLink">Services</a>
                        </li>

                        <li className="navItem">
                            <a href="price" className="navLink">Pricing</a>
                        </li>

                        <li className="navItem">
                            <a href="contact" className="navLink">Contact</a>
                        </li>

                        <li className="navItem">
                            <span className="dark">{theme !== 'light' ? 'Dark' : 'Light'}</span>
                        </li>

                        <div className="mode">
                            {/* <label className="switch">
                                <input type="checkbox" onChange={handleThemeToggle} checked={theme !== 'light' ? false : true}/>
                                <span className="slider"></span>
                            </label> */}
                            <Slider toggleTheme={toggleTheme} theme={theme} className='slider'/>

                        </div>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <div className="icon">✖</div>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <CgMenuGridO className="icon"/>
                </div>
            </header>
        </section>
    )
}

Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default Navbar
