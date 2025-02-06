import Loader from '../components/Loader';
import Navbar from '../contents/Navbar/Navbar';
import Whatsapp from '../components/Whatsapp/Whatsapp';
import Footer from '../contents/Footer/Footer';
import useAppSetup from '../hooks/useAppSetup';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    const { theme, toggleTheme, loading } = useAppSetup();

    return (
        <div className="Index" data-theme={theme}>
            {loading && <Loader />}
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Whatsapp />
            {children}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
