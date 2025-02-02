import './priceCard.css'
import PropTypes from 'prop-types';
import { MdDone } from "react-icons/md";

const PriceCard = ({ title, desc, price, times, lists, toggleForm }) => {
    return (
        <div className="price_card">
            <div className="card__border"></div>
            <div className="card_title__container">
                <span className="card_title">{title}</span>
                <p className="card_paragraph">{desc}</p>
                <p className="card_price">{price} <small className='card_times'>{times}</small></p>
            </div>
            <hr className="line" />
            <ul className="card__list">
                {lists.map((list, index) => (
                    <li key={index} className="card__list_item">
                        <span className="check">
                            <MdDone className='check_svg'/>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg> */}
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
