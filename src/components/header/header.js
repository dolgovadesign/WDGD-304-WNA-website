import './header.css';
import Navbar from './navbar';
import heroimage from '../../components/images/heroimage.jpg';

//Create Header component
function Header() {
    return (
        <header id="home">
            {/* Add navigation bar to header */}
            <Navbar />
            {/* Add hero image and the name of a creator of the website */}
            <div className="header-section">
                <div className="creators-name">
                    <p>Elizaveta</p>
                    <p>Dolgova</p>
                </div>
                <div className="header-image">
                    <img className="hero-image" src={heroimage} alt="Web" />
                </div>
            </div>
        </header>
    );
}

export default Header;