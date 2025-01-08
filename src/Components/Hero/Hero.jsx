import './Hero.css'
import profile_img from '../../assets/Ashik.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img className='profile-img' src={profile_img} alt="" />
            <h1><span>I'm Ashik Mahmud,</span> frontend developer based on Bangladesh.</h1>
            <p>Hi, I'm a web developer passionate about creating engaging,
                user-friendly, and visually appealing online experiences. I combine creativity
                and technical expertise to build websites that deliver
                seamless functionality and leave a lasting impression.</p>
            <div className="hero-action">
                <div className="hero-contact">
                    Contact With Me
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    );
};

export default Hero;