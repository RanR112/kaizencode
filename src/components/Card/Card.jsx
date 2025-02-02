import './card.css'
import PropTypes from 'prop-types';
import Stars from '../Stars';
import { useState } from 'react';

const Card = ({ icon, title, desc }) => {
    const [isHover, setHover] = useState(false);

    const TrueStar = () => {
        setHover(true);
    }

    const FalseStar = () => {
        setHover(false);
    }

    return (
        <div className='card'>
            <div className="containers noselect"  onMouseEnter={TrueStar} onMouseLeave={FalseStar}>
                <div className="canvas">
                    <div className="tracker tr-1"></div>
                    <div className="tracker tr-2"></div>
                    <div className="tracker tr-3"></div>
                    <div className="tracker tr-4"></div>
                    <div className="tracker tr-5"></div>
                    <div className="tracker tr-6"></div>
                    <div className="tracker tr-7"></div>
                    <div className="tracker tr-8"></div>
                    <div className="tracker tr-9"></div>
                    <div className="tracker tr-10"></div>
                    <div className="tracker tr-11"></div>
                    <div className="tracker tr-12"></div>
                    <div className="tracker tr-13"></div>
                    <div className="tracker tr-14"></div>
                    <div className="tracker tr-15"></div>
                    <div className="tracker tr-16"></div>
                    <div className="tracker tr-17"></div>
                    <div className="tracker tr-18"></div>
                    <div className="tracker tr-19"></div>
                    <div className="tracker tr-20"></div>
                    <div className="tracker tr-21"></div>
                    <div className="tracker tr-22"></div>
                    <div className="tracker tr-23"></div>
                    <div className="tracker tr-24"></div>
                    <div className="tracker tr-25"></div>
                    <div id="card" className='grid'>
                        { isHover && (<div className="stars-bg">
                            <Stars star={50} sizeNumber={8} visibility={0.0001} Style={{ 
                                width: "100%",
                                height: "100%",
                                position: "absolute"
                            }}/>
                        </div>) }
                        <div className="icon-card">
                            {icon}
                        </div>
                        <div className="title">
                            <h1>{title}</h1>
                        </div>
                        <div className="desc">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Card
