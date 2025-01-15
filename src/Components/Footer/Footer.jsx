import './Footer.css'
import footer_logo from '../../assets/name_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div id='footer-section' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>
                        I am a professional web developer with long time experience
                        in this field. I have completed 20+ projects and have 2+ years of experience.
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>
                    &copy; 2021 All rights reserved. Designed by <span>Ashik Mahmud</span>
                </p>
                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;