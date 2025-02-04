import { useEffect, useState } from 'react';
import './pricing.css';
import PriceCard from '../../components/PriceCard/PriceCard';
import PricingForm from '../../components/PricingForm/PricingForm';
import pricingData from '../../global/Pricing';

const Pricing = () => {
    const [isClick, setClick] = useState(false);
    const [selectedPricing, setSelectedPricing] = useState(null);

    const toggleForm = (paket = null) => {
        setSelectedPricing(paket);
        setClick(!isClick);
    };

    useEffect(() => {
        if (isClick) {
            document.body.classList.add('form-open');
        } else {
            document.body.classList.remove('form-open');
        }
    }, [isClick]);

    return (
        <section className='pricing' id='pricing'>
            <div className="pricing-title" data-aos="fade-up">
                <h1>Bangun Website Impian Anda Bersama <span>KaizenCode!</span></h1>
            </div>
            <div className="pricing-content grid">
                {pricingData.map((item, index) => (
                    <div key={index} className={`${item.paket} price-cards`} data-aos="flip-left" data-aos-duration="800">
                        <PriceCard 
                            title={item.detail.title}
                            desc={item.detail.desc}
                            price={item.detail.price}
                            times={item.detail.times}
                            lists={item.detail.lists}
                            toggleForm={() => toggleForm(item.detail)}
                        />
                    </div>
                ))}
            </div>
            {isClick && (
                <div className="pricing-form">
                    <div className="form-overlay" onClick={toggleForm}></div>
                    <PricingForm toggleForm={toggleForm} selectedPricing={selectedPricing} />
                </div>
            )}
        </section>
    );
};

export default Pricing;
