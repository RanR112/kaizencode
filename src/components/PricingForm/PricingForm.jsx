import { useState } from 'react';
import Stars from '../Stars';
import './pricingForm.css';
import PropTypes from 'prop-types';
import { submit, consultation } from '../../global/Contact';

const PricingForm = ({ toggleForm, selectedPricing }) => {
    // State untuk menyimpan data input
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        company: '',
        business: '',
        notes: ''
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, whatsapp, company, business, notes } = formData;

        if (!name || !whatsapp || !company || !business) {
            alert('Harap lengkapi semua data yang diperlukan!');
            return;
        }

        const whatsappURL = submit(selectedPricing, formData);
        window.open(whatsappURL, '_blank');
    };

    const handleConsultation = () => {
        const whatsappURL = consultation(selectedPricing, formData);
        window.open(whatsappURL, '_blank');
    };

    return (
        <form className="form flex" onSubmit={handleSubmit} data-aos="fade-up">
            <button
                type="button"
                className="close-button"
                onClick={toggleForm}
            >
                ✖
            </button>
            {selectedPricing && (
                <aside className='aside'>
                    <Stars star={50} Style={{ 
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: '0',
                        top: '0'
                    }}/>
                    <div className="form-title"><span>Paket {selectedPricing.title}</span></div>
                    <div className="title-2 grid"><span>{selectedPricing.price}</span><small>{selectedPricing.times}</small></div>
                    <ul className="lists-form">
                        <p className='list-title'>Fitur yang Didapat:</p>
                        {selectedPricing.lists.map((list, index) => (
                            <li key={index} className="price-list-item">
                                <span className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check-svg">
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="list-text">{list}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
            <div className="form-container grid">
                <div className="form-title-2"><span>Data Pemesanan</span></div>
                <div className="input-container">
                    Nama Lengkap
                    <input
                        name="name"
                        placeholder="Nama Lengkap Anda"
                        type="text"
                        className="input-name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    No. WhatsApp
                    <input
                        name="whatsapp"
                        placeholder="Contoh: 08123456789"
                        type="text"
                        className="input-whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    Nama Usaha/Perusahaan
                    <input
                        name="company"
                        placeholder="Contoh: KaizenCode"
                        type="text"
                        className="input-company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    Jenis Usaha
                    <input
                        name="business"
                        placeholder="Contoh: Jasa Pembuatan Website"
                        type="text"
                        className="input-business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-container">
                    Catatan
                    <textarea
                        name="notes"
                        placeholder="Tuliskan kebutuhan Anda disini"
                        className="input-notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-container flex">
                    <div className="button-form" onClick={handleConsultation}>
                        <span className='wa'>Konsultasi</span>
                    </div>
                    <button className="submit" type="submit">
                        <span className="send-text">Kirim</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

PricingForm.propTypes = {
    selectedPricing: PropTypes.object.isRequired,
    toggleForm: PropTypes.func.isRequired,
};

export default PricingForm;
