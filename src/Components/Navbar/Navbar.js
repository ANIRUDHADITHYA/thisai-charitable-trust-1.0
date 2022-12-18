import "./Navbar.css";
import Logo from "./../../Asserts/logo1.jpg";


const Navbar = () => {
    return (
        <div className="navbar-section">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" ></img>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Academic Wing</li>
                    <li>Events</li>
                    <li>Contact Us</li>
                </ul>
                <div className="side-nav">
                    <i class="fa-solid fa-grip-lines"></i>
                    <p className="donate-button"><span>Donate</span></p>
                </div>
            </div>
        </div>
    )
}



export default Navbar;