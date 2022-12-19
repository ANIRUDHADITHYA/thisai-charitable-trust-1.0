import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";
import image1 from "./../../Asserts/carousel/1.jpg";
import image2 from "./../../Asserts/carousel/2.jpg";
import image3 from "./../../Asserts/carousel/3.jpg";

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
                </div>
            </div>
        </div>
    )
}





export default Homepage;




