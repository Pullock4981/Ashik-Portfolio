import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_1 from '../../assets/profile_pic1.jpg'

const About = () => {
    return (
        <div id='about-section-here' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_1} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Final-year CSE student at DIU, from Narsingdi. Passionate about tech, problem-solving, and eager to contribute to real-world projects and grow in the tech field.</p>
                        <p>I'm a dedicated MERN stack developer passionate about building dynamic, responsive web apps with clean code and user-focused, scalable solutions.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React.js</p><hr style={{ width: "75%" }} /></div>
                        {/* <div className="about-skill"><p>Next.js</p><hr style={{ width: "50%" }} /></div> */}
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIEMCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    );
};

export default About;