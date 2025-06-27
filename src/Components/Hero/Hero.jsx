import './Hero.css'
import profile_img from '../../assets/Ashik.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home-section' className='hero'>
            <img className='profile-img' src={profile_img} alt="" />
            <h1><span>I'm Ashik Mahmud,</span> frontend developer based on Bangladesh.</h1>
            <p>Hi, I'm a web developer passionate about creating engaging,
                user-friendly, and visually appealing online experiences. I combine creativity
                and technical expertise to build websites that deliver
                seamless functionality and leave a lasting impression.</p>
            <div className="hero-action">
                <div className="hero-contact">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Contact With Me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a target='_blank' href="https://drive.google.com/file/d/1kVSOxGu41ksTakQocVPmREqiLeyG6Tuh/view?usp=drivesdk">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;