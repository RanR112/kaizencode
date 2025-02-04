import './services.css';
import Card from '../../components/Card/Card';
import cardData from '../../global/Card'; // Pastikan ini benar

const Services = () => {
    return (
        <section className='services grid' id='services'>
            <div className='content-title' data-aos="fade-up">
                <h1>Fitur Terbaik untuk Website Anda</h1>
            </div>
            <div className="content">
                <div className="content-card grid">
                    {cardData.map((item, index) => (
                        <Card 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
