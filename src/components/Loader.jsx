import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
        <div className="layer">
      <div className="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
        </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .spinner {
   height: 50px;
   width: max-content;
   font-size: 18px;
   font-weight: 600;
   font-family: monospace;
   letter-spacing: 1em;
   color: #f5f5f5;
   filter: drop-shadow(0 0 10px);
   display: flex;
   justify-content: center;
   align-items: center;
  }

  .spinner span {
   animation: loading6454 1.75s ease infinite;
  }

  .spinner span:nth-child(2) {
   animation-delay: 0.25s;
  }

  .spinner span:nth-child(3) {
   animation-delay: 0.5s;
  }

  .spinner span:nth-child(4) {
   animation-delay: 0.75s;
  }

  .spinner span:nth-child(5) {
   animation-delay: 1s;
  }

  .spinner span:nth-child(6) {
   animation-delay: 1.25s;
  }

  .spinner span:nth-child(7) {
   animation-delay: 1.5s;
  }

  @keyframes loading6454 {
   0%, 100% {
    transform: translateY(0);
   }

   50% {
    transform: translateY(-10px);
   }
  }`;

export default Loader;
