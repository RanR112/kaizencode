import PropTypes from 'prop-types';
import { useEffect, useRef} from 'react'

const Stars = ({ Style, star, sizeNumber = 3, visibility = 0.001  }) => {
    const canvasRefs = useRef([]);

    useEffect(() => {
        const canvases = canvasRefs.current;
    
        canvases.forEach((canvas) => {
            const ctx = canvas.getContext("2d");
    
            let starArray = [];
            const numberOfStars = star;
    
            const setCanvasSizeAndStars = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
    
                starArray = [];
                for (let i = 0; i < numberOfStars; i++) {
                    starArray.push(new Star());
                }
            };
    
            class Star {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * sizeNumber;
                    this.speedX = (Math.random() - 0.5) * 0.5;
                    this.speedY = (Math.random() - 0.5) * 0.5;
                    this.brightness = Math.random();
                }
    
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
    
                    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    
                    this.brightness = Math.sin(Date.now() * visibility * this.size) * 0.5 + 0.5;
                }
    
                draw() {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
    
            function handleStars() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                starArray.forEach((star) => {
                    star.update();
                    star.draw();
                });
            }
    
            const animate = () => {
                handleStars();
                requestAnimationFrame(animate);
            };
    
            setCanvasSizeAndStars();
    
            window.addEventListener("resize", setCanvasSizeAndStars);
            animate();
    
            return () => {
                window.removeEventListener("resize", setCanvasSizeAndStars);
            };
        });
    }, [star, sizeNumber, visibility]);
    

    return (
            <canvas
                style={Style}
                ref={(el) => (canvasRefs.current[0] = el)}
            ></canvas>
    )
}

Stars.propTypes = {
    Style: PropTypes.any.isRequired,
    star: PropTypes.number.isRequired,
    sizeNumber: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
};

export default Stars
