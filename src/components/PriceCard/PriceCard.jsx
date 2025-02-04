import './priceCard.css'
import PropTypes from 'prop-types';
import { MdDone } from "react-icons/md";

const PriceCard = ({ title, desc, price, times, lists, toggleForm }) => {
    return (
        <div className="price_card">
            <div className="card__border"></div>
            <div className="card_title__container" data-aos="zoom-in">
                <span className="card_title">{title}</span>
                <p className="card_paragraph">{desc}</p>
                <p className="card_price">{price} <small className='card_times'>{times}</small></p>
            </div>
            <hr className="line" />
            <ul className="card__list" data-aos="zoom-in">
                {lists.map((list, index) => (
                    <li key={index} className="card__list_item">
                        <span className="check">
                            <MdDone className='check_svg'/>
                        </span>
                        <span className="list_text">{list}</span>
                    </li>
                ))}
            </ul>
            <button className="button" onClick={toggleForm}>Buat Sekarang!</button>
        </div>
    )
}

PriceCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    times: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    toggleForm: PropTypes.func.isRequired,
    
};

export default PriceCard
