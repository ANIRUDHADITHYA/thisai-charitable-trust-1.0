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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const Homepage = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


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
                <div className="about-us-section">
                    <div className="about-us-container">
                        <div className="about-us-intro-card">
                            <h1 className="about-us-title">Who We Are</h1>
                            <h6>ABOUT US</h6>
                            <h1 className="abt-us-sub-title">Get Access to Better Education</h1>
                            <p className="abt-us-content">
                                <b>AATRUPADAI FOUNDATION</b>, a team that has joined hands to enlighten the minds of government and
                                government aided school NEET ASPIRANTS , aims at providing FREE MORAL and ACADEMIC SUPPORT
                                for NEET 2022 APPEARING CANDIDATES (FRESHERS/REPEATERS) by MBBS STUDENTS.
                            </p>
                            <p><a href="/aboutus">READ MORE <span><i class="fa-solid fa-arrow-right"></i></span></a></p>
                        </div>
                        <div className="about-us-vm-card">
                            <h1>Our Vision</h1>
                            <ul>
                                <li>Provides training through our live classes/recorded videos and with other education tools for NEET 2022 appearing candidates.</li>
                                <li>To Create required content for NEET examination and make it accessible to govt school students across the state in future.</li>
                                <li>To motivate, inspire, young budding social entrepreneurs to take up such social initiatives in the future.</li>
                            </ul>
                        </div>
                        <div className="about-us-vm-card">
                            <h1>Our Mission</h1>
                            <ul>
                                <li>Provides training through our live classes/recorded videos and with other education tools for NEET 2022 appearing candidates.</li>
                                <li>To Create required content for NEET examination and make it accessible to govt school students across the state in future.</li>
                                <li>To motivate, inspire, young budding social entrepreneurs to take up such social initiatives in the future.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="what-vdo-section">
                <div className="what-vdo-wrapper">
                    <div className="what-vdo-container">
                        <div className="service-details">
                            <h1>What We Do</h1>
                            <h6>SERVICES</h6>
                            <h2>The Program Aims at Providing</h2>
                            <div className="service-content">
                                <div className="service-content-container">
                                    <i class="fa-regular fa-hand-spock"></i>
                                    <h4>LIVE CLASSES / RECORDED LECTURES for the registered candidates</h4>
                                </div>
                                <div className="service-content-container">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <h4>WHATSAPP MENTORSHIP PROGRAM for timely doubt clarifications</h4>
                                </div>
                                <div className="service-content-container">
                                    <i class="fa-regular fa-calendar"></i>
                                    <h4>Weekly ASSIGNMENT SOLVING with mentors on SUNDAY</h4>
                                </div>
                                <div className="service-content-container">
                                    <i class="fa-regular fa-note-sticky"></i>
                                    <h4>CONDUCT MONTHLY MOCK TEST, followed by video solutions for the same</h4>
                                </div>
                            </div>
                        </div>

                        <div className="service-img-wrapper">
                            <Player
                                autoplay
                                loop
                                src="https://assets9.lottiefiles.com/packages/lf20_fq7pwzey.json"
                                style={{ height: '100%', width: '100%' }}
                            >
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-section">
                <div className="course-container">
                    <div className="course-tile-container">
                        <h1>Categories</h1>
                        <h6>COURSE BY CATEGORIES</h6>
                        <h2>Course</h2>
                    </div>
                    <div className="course-card">
                        <ul class="cards">
                            <li>
                                <Link to="#" class="card">
                                    <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">NEET Course 1</h3>
                                                <span class="card__status">3 Subjects available</span>
                                            </div>
                                        </div>
                                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="card">
                                    <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">NEET Course </h3>
                                                <span class="card__status">5 Subjects available</span>
                                            </div>
                                        </div>
                                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="card">
                                    <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">NEET Course 3</h3>
                                                <span class="card__status">10 Subjects available</span>
                                            </div>
                                        </div>
                                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="latest-news-section">
                <div className="latest-news-wrapper">
                    <div className="latest-news-container">
                        <div className="latest-news-title-card">
                            <h1>Recognition</h1>
                            <h6>LATEST</h6>
                            <h2>Rewards</h2>
                        </div>
                        <div className="rewards-container">
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                infinite={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px">
                                <div className="rewards-data-container">
                                    <img src="https://aatrupadaifoundation.com/wp-content/uploads/2022/07/BEST-NGO-2.webp" alt="img1"></img>
                                    <p>Title 1</p>
                                </div>
                                <div className="rewards-data-container">
                                    <img src="https://aatrupadaifoundation.com/wp-content/uploads/2022/07/Newspaper.jpg" alt="img1"></img>
                                    <p>Title 2</p>
                                </div>
                                <div className="rewards-data-container">
                                    <img src="https://aatrupadaifoundation.com/wp-content/uploads/2022/07/BEST-NGO-1.webp" alt="img1"></img>
                                    <p>Title 3</p>
                                </div>
                                <div className="rewards-data-container">
                                    <img src="https://globalgoodawards.co.uk/wp-content/uploads/2022/11/GGA2022_IW__0045-500px.jpg" alt="img1"></img>
                                    <p>Title 4</p>
                                </div>
                            </Carousel>

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




