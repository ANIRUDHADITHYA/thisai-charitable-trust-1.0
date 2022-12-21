import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";
import image1 from "./../../Asserts/carousel/1.jpg";
import image2 from "./../../Asserts/carousel/2.jpg";
import image3 from "./../../Asserts/carousel/3.jpg";
import doctor from "./../../Asserts/coaching/doctor.png";
import icon1 from "./../../Asserts/coaching/message1.png";
import icon2 from "./../../Asserts/coaching/message2.png";
import icon3 from "./../../Asserts/coaching/message3.png";
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css"

const Homepage = () => {




    return (
        <div className="homepage-section">
            <Navbar />
            <div className="homepage-container">
                <div className="dashboard-section">
                    <h1 className="result-title">Results</h1>
                    <h6>LATEST</h6>
                    <h1 className="neet-title">NEET 2022 Results</h1>
                    <div className="carousel-display-space">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src={image1} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={image3} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={image2} alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="coaching-section">
                    <div className="coaching-wrapper">
                        <div className="coaching-container">
                            <div className="doc-img-wrapper">
                                <img src={doctor} alt="doctor"></img>
                            </div>

                            <div className="coaching-details">
                                <h1>FREE NEET <br></br> COACHING</h1>
                                <h2>For Govt. And Govt. Aided English Medium School Students</h2>
                                <h4>BY A TEAM THAT HAS JOINED HANDS FOR A BETTER CAUSE</h4>
                                <p>READ MORE <span><i class="fa-solid fa-arrow-right"></i></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="coaching-message-box">
                        <div className="message-box">
                            <div className="message-icon">
                                <img src={icon1} alt="icon1"></img>
                            </div>
                            <div className="message-content">
                                <h1>Best Instructors</h1>
                                <p>Better than a thousand days of diligent study is one with great educator.</p>
                            </div>
                        </div>
                        <div className="line-linear"></div>
                        <div className="message-box">
                            <div className="message-icon">
                                <img src={icon2} alt="icon2"></img>
                            </div>
                            <div className="message-content">
                                <h1>Expert Advisors</h1>
                                <p>In order to become the 1% , you must do what the other 99% won't". Here we do not instruct what to do , we encourage you to do what is best..</p>
                            </div>
                        </div>
                        <div className="line-linear"></div>
                        <div className="message-box">
                            <div className="message-icon">
                                <img src={icon3} alt="icon3"></img>
                            </div>
                            <div className="message-content">
                                <h1>Be Successful</h1>
                                <p>Keep working hard until the day you can say "scalpel please"</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="join-us-section">
                <div className="join-us-container">
                    <div className="join-us-wrapper">
                        <div className="join-us-content-card">
                            <h1><span className="join-cmt">Join the Community</span> Now as a Mentor</h1>
                            <p>The team would like to collaborate with young dynamic volunteers who are looking for a small opportunity to support the young budding medical community.</p>
                            <p>Your contribution in terms of being a mentor/ providing reference books/ any other supportive tools could lighten the lives of many aspiring future doctors.</p>
                            <Link to="#" ><span>JOIN US</span></Link>
                        </div>
                        <div className="join-us-img-wrapper">
                            <Player
                                autoplay
                                loop
                                src="https://assets6.lottiefiles.com/packages/lf20_4djadzzo.json"
                                style={{ height: '100%', width: '100%' }}
                            >
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Homepage;




