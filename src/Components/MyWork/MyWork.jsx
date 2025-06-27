import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import p_1 from '../../assets/p-1.png'
import p_2 from '../../assets/p-2.png'
import p_3 from '../../assets/p-3.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MyWork = () => {
    return (
        <div id='my-work-section' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="my-work-containers">
                <div className="work-container">
                    <a target='_blank' href="https://hobbyhub-4981.netlify.app/">
                        <img src={p_1} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/hobby-hub-client-side">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://hobbyhub-4981.netlify.app/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <a target='_blank' href="https://resturent-clint-side.netlify.app/">
                        <img src={p_2} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/resturant-app-client-side">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://resturent-clint-side.netlify.app/">
                                Live link
                            </a>
                        </div>
                    </div>

                </div>
                <div className="work-container">
                    <a target='_blank' href="https://my-app-bd4981.netlify.app/">
                        <img src={p_3} alt="" />
                    </a>
                    <div className="project_overview">
                        <div className="link">
                            <a target='_blank' href="https://github.com/Pullock4981/my-app-bd?tab=readme-ov-file">
                                Code link
                            </a>
                        </div>
                        <div className="link">
                            <a target='_blank' href="https://my-app-bd4981.netlify.app/">
                                Live link
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="work-container">
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
                </div> */}
            </div>
            
            {/* <AnchorLink className="anchor-link" href="#portfolio">
                <div className="mywork-show-more">
                    <p>Show more</p>
                        <img src={arrow_icon} alt="" />
                </div>
            </AnchorLink> */}
                
        </div>
    );
};

export default MyWork;