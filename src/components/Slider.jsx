import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slider = ({toggleTheme, theme}) => {

    const handleThemeToggle = () => {
        toggleTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <StyledWrapper>
          <label className="switch">
            <input type="checkbox" onChange={handleThemeToggle} checked={theme !== 'light' ? true : false}/>
            <span className="slider">
              <div className="fug">
                <svg viewBox="0 0 16 16" className="nav-slider bi bi-rocket-takeoff-fill" fill="currentColor" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                  <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
                </svg>
              </div>
              <div className="stars">
                <svg viewBox="0 0 16 16" className="star bi bi-star-fill" fill="#fff" height={4} width={4} xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg viewBox="0 0 16 16" className="star bi bi-star-fill" fill="#fff" height={4} width={4} xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg viewBox="0 0 16 16" className="star bi bi-star-fill" fill="#fff" height={4} width={4} xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg viewBox="0 0 16 16" className="star bi bi-star-fill" fill="#fff" height={4} width={4} xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </span>
          </label>
        </StyledWrapper>
      );
    }
    
    const StyledWrapper = styled.div`
      /* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: flex;
        width: 3em;
        height: 1.5em;
      }
    
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
    
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 5px;
        background-color:rgb(102, 128, 149);
        transition: 0.4s;
        border-radius: 30px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        border: 1px solid #fff;
      }
    
      .slider .fug .nav-slider {
        position: absolute;
        height: 1.05em;
        width: 1.2em;
        left: 0.2em;
        bottom: 0.15em;
        transition: 0.4s;
        z-index: 10;
        transform: rotate(45deg);
        fill: #fff;
      }
    
      .switch input:checked + .slider {
        background-color:rgb(20, 41, 67);
      }
    
      .switch input:focus + .slider {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      }
    
      .switch input:checked + .slider .fug .nav-slider {
        transition: 0.4s;
        transform: translateX(1.3em) rotate(45deg);
        padding: 2px;
        animation: 4s nav linear infinite;
      }
    
      @keyframes nav {
        0% {
          transform: translateX(1.3em) rotate(45deg);
        }
        10% {
          transform: translateX(1.1em) rotate(45deg);
        }
        30% {
          transform: translateX(1.2em) rotate(45deg);
        }
        50% {
          transform: translateX(1em) rotate(45deg);
        }
        70% {
          transform: translateX(1.2em) rotate(45deg);
        }
        80% {
          transform: translateX(1em) rotate(45deg);
        }
        90% {
          transform: translateX(1.2em) rotate(45deg);
        }
        100% {
          transform: translateX(1.3em) rotate(45deg);
        }
      }
    
      .star {
        opacity: 0;
        transition: 0.2s linear;
      }
    
      .switch input:checked + .slider .star {
        opacity: 1;
        transition: 0.2s linear;
        animation: 2s piscar linear infinite;
      }
    
      .star:nth-last-child(1) {
        position: absolute;
        top: 5px;
        left: 8px;
      }
      .star:nth-last-child(2) {
        position: absolute;
        top: 10px;
        left: 13px;
      }
      .star:nth-last-child(3) {
        position: absolute;
        top: 14px;
        left: 5px;
      }
      .star:nth-last-child(4) {
        position: absolute;
        top: 17px;
        left: 18px;
      }
    
      @keyframes piscar {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }`;

Slider.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default Slider;
