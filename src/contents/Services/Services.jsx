import './services.css'
import Card from '../../components/Card/Card'
import { RiTeamFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const Services = () => {
    return (
        <section className='services grid' id='services'>
            <div className='content-title'>
                <h1>Fitur Terbaik untuk Website Anda</h1>
            </div>
            <div className="content">
                <div className="content-card grid">
                    <Card icon={<RiTeamFill/>} title='Tim Ahli & Terpercaya' desc='Developer dan desainer handal yang siap mewujudkan website impian Anda.' />
                    <Card icon={<MdDevices/>} title='Desain Modern & Responsif' desc='Tampilan menarik dan optimal di semua perangkat.' />
                    <Card icon={<MdOutlineScreenSearchDesktop/>} title='SEO-Friendly' desc='Website ramah mesin pencari untuk tingkatkan visibilitas bisnis.' />
                    <Card icon={<IoIosPricetags/>} title='Harga Terjangkau' desc='Layanan kami terjangkau, tanpa biaya tambahan yang mengejutkan.' />
                    <Card icon={<FaPencilRuler/>} title='Custom Sesuai Kebutuhan' desc='Kami buat website dengan fitur sesuai keinginan Anda.' />
                    <Card icon={<RiCustomerService2Fill/>} title='Dukungan Penuh' desc='Kami siap membantu mulai dari konsultasi, pembuatan, hingga maintenance' />
                </div>
            </div>
        </section>
    )
}

export default Services
