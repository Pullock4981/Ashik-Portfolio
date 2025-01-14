import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import p_1 from '../../assets/project_1.png'
import p_2 from '../../assets/project_2.png'
import p_3 from '../../assets/project_3.png'
import p_4 from '../../assets/project_4.png'
import p_5 from '../../assets/project_5.png'
import p_6 from '../../assets/project_6.png'

const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My Latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            {/* <div className="mywork-container">
                {
                    mywork_data.map((work, index) => {
                        return <img key={index} src={work.w_img} alt="" />
                    })
                }
            </div> */}

            <div className="my-work-containers">
                <div className="work-container">
                    <a target='_blank' href="https://pullock4981.github.io/Batch-9-Assignment-5/">
                        <img src={p_1} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Batch-9-Assignment-5">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://pullock4981.github.io/Batch-9-Assignment-5/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <a target='_blank' href="https://pullock4981.github.io/Jobster/">
                        <img src={p_2} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Jobster">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://pullock4981.github.io/Jobster/">
                                Live link
                            </a>
                        </div>
                    </div>

                </div>
                <div className="work-container">
                    <a target='_blank' href="https://pullock4981.github.io/Alphabet-Clash/">
                        <img src={p_3} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Alphabet-Clash">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://pullock4981.github.io/Alphabet-Clash/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <a target='_blank' href="https://ashik-portfolio-v1.netlify.app/">
                        <img src={p_4} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Ashik-Portfolio">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://ashik-portfolio-v1.netlify.app/">
                                Live link
                            </a>
                        </div>
                    </div>

                </div>
                <div className="work-container">
                    <a target='_blank' href="https://pullock4981.github.io/Hospital-Management_system/">
                        <img src={p_5} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Hospital-Management_system">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://pullock4981.github.io/Hospital-Management_system/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <a target='_blank' href="https://pullock4981.github.io/Batch-9-Assignment-3/">
                        <img src={p_6} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/Batch-9-Assignment-3">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://pullock4981.github.io/Batch-9-Assignment-3/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mywork-show-more">
                <p>Show more</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;