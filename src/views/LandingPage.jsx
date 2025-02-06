import Layout from '../layouts/Layout';
import Home from '../contents/Home/Home';
import About from '../contents/About/About';
import Services from '../contents/Services/Services';
import Pricing from '../contents/Pricing/Pricing';

function LandingPage() {
    return (
        <Layout>
            <Home />
            <About />
            <Services />
            <Pricing />
        </Layout>
    );
}

export default LandingPage;
