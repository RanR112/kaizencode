import "./footer.css"
import LogoW from "../../assets/LogoW.png"
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
            <section className='footer' id='FOOTER'>
                <div className="content flex">
                    <div className="logoDiv" data-aos="fade-up">
                        <div className="logo flex">
                            <img src={LogoW} alt="logo" className='icon'/>
                            <span className='grid'>
                            </span>
                        </div>
                    </div>
                    <div className="aboutDiv flex">
                        <div className="about-footer grid" data-aos="fade-up">
                            <h3>ABOUT</h3>
                            <a href="/">Tentang</a>
                            <a href="/">Layanan</a>
                            <a href="/">Produk</a>
                            <a href="/">Harga</a>
                            <a href="/">Kontak</a>
                        </div>
                        <div className="pages-footer grid" data-aos="fade-up">
                            <h3>PAGES</h3>
                            <a href="/">Privacy Policy</a>
                            <a href="/">FAQ</a>
                        </div>
                    </div>
                </div>
                <div className="footerDiv flex">
                    <small>Copyright &copy; 2025 | KaizenCode</small>
                    <div className="medsos">
                        <a href="https://www.instagram.com/kaizencode.id/"><FaInstagram className='icon'/></a>
                        <a href="https://www.tiktok.com/@kaizencode"><FaTiktok className='icon'/></a>
                        <a href="https://wa.me/62895360711551"><FaWhatsapp className='icon'/></a>
                    </div>
                </div>
            </section>
    )
}

export default Footer
