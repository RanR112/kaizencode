import Stars from '../../components/Stars';
import './home.css';
import PropTypes from 'prop-types';
import IconLP from '../../assets/iconLP.svg'
import IconCP from '../../assets/iconCP.svg'
import IconCW from '../../assets/iconCW.svg'
// import IconCV from '../../assets/iconCV.svg'
import { TypeAnimation } from 'react-type-animation';
import { CgDetailsMore } from "react-icons/cg";
import { IoMdCreate } from "react-icons/io";
import { useEffect, useState } from 'react';

const Home = () => {
    const [borderRadius, setBorderRadius] = useState("0 0 35% 35%");
    const [starsCount, setStarsCount] = useState(100);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBorderRadius("0 0 15% 15%");
                setStarsCount(80);
            } else {
                setBorderRadius("0 0 35% 35%");
                setStarsCount(150);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set state awal berdasarkan ukuran layar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className='home' id='home'>
            <Stars className='stars' star={starsCount} Style={{
                    background: "var(--StarsBG)",
                    zIndex: "1",
                    width: "100%",
                    // height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderRadius: borderRadius,
                    maxHeight: "65vh",
                    boxShadow: "inset 0 0 0 rgba(#000000, 0.5), inset 0 0 0 rgba(#000000, 0.5), inset 0 -6px 10px rgba(#000000, 0.5), inset 0 0 0 rgba(#000000, 0.5)",
                    backgroundPosition: "center",
                }}/>
            <div className="homeContent container">
                <div className="top-text" data-aos="fade-up">
                    Partner Digital Terbaik untuk Website Impian Anda
                </div>
                <div className="text flex" data-aos="fade-up">
                    <div className="text-title">
                        <h1>Jasa Pembuatan Website</h1>
                    </div>
                    <div className="text-services">
                        <TypeAnimation
                            sequence={[
                                'Landing Page',
                                2500,
                                'Company Profile',
                                2500,
                                'Custom',
                                2500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='text-services'
                            style={{
                                fontSize: "3rem",
                                color: "#A3E3FF",
                                textShadow: "0 6px 6px rgba(255, 255, 255, 0.2)",
                            }}
                            />
                    </div>
                </div>
                <div className="bottom-text" data-aos="fade-up">
                    Jadikan Website Anda Lebih dari Sekedar Halaman Online dengan Desain yang Modern, Responsif, dan SEO-Friendly
                </div>
                <div className="button flex" data-aos="fade-up">
                    <div className="btn-primary flex">
                        <IoMdCreate className='icon'/>
                        <a>Buat Website Sekarang</a>
                    </div>
                    <div className="btn-secondary flex">
                        <CgDetailsMore className='icon' />
                        <a>Pelajari Lebih Lanjut</a>
                    </div>
                </div>
            </div>
            <div className="block-services">
                <div className="block-content flex">
                    <div className="block-item grid" data-aos="zoom-in">
                        <img src={IconLP} alt=""/>
                        <p>Landing Page</p>
                    </div>
                    <div className="block-item grid" data-aos="zoom-in">
                        <img src={IconCP} alt=""/>
                        <p>Company Profile</p>
                    </div>
                    <div className="block-item grid" data-aos="zoom-in">
                        <img src={IconCW} alt=""/>
                        <p>Custom Website</p>
                    </div>
                    {/* <div className="block-item grid">
                        <img src={IconCV} alt=""/>
                        <p>CV & Lamaran Pekerjaan</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

Home.propTypes = {
    theme: PropTypes.string.isRequired,
};

export default Home
