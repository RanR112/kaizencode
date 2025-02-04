import './about.css'
import Why from '../../assets/why.svg'
import Welcome from '../../assets/welcome.svg'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="aboutContent container grid">
                <div className="welcome flex">
                    <div className="text" data-aos="fade-right">
                        <h1>Selamat datang di KaizenCode!</h1>
                        <p>Kami adalah penyedia jasa pembuatan website profesional yang siap membantu bisnismu bersinar di era digital. Dengan desain modern, responsif, dan ramah SEO, kami memastikan website Anda menarik, fungsional, dan mampu mendatangkan lebih banyak pelanggan.</p>
                    </div>
                    <img src={Welcome} data-aos="fade-left"/>
                </div>
                <div className="why flex">
                    <img src={Why} data-aos="fade-right"/>
                    <div className="text" data-aos="fade-left">
                        <h1>Mengapa Pilih KaizenCode?</h1>
                        <p>KaizenCode adalah solusi terbaik untuk jasa pembuatan website profesional. Kami menyediakan desain responsif yang sempurna di semua perangkat, SEO friendly agar mudah ditemukan di Google, dan kustomisasi penuh sesuai kebutuhan bisnis Anda. Dengan performa cepat, keamanan terbaik, dan support 24/7, kami siap membantu bisnis Anda sukses di dunia digital.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
