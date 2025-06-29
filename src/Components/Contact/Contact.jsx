import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            {/* contact section */}
            <div id='contact' className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I am available for freelance work. Connect with me through email or phone.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>
                                ashikpullock99@gmail.com
                            </p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>
                                +8801624334044
                            </p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>
                                Mirpur, section-2, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder='Enter Your name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" name="email" placeholder='Enter Your email'/>
                    <label htmlFor="">Write your messege here</label>
                    <textarea name="messege" rows="3" placeholder='Write your messege here'></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;