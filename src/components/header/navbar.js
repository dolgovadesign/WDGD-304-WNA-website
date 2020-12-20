import './navbar.css';

function Navbar() {
    return (
        <div className="navigation">
            <div className="navigation-links">
                <a className="navigation-link" href="#home">Home</a>
                <a className="navigation-link" href="#about">About</a>
                <a className="navigation-link" href="#portfolio">Portfolio</a>
                <a className="navigation-link" href="#videos">Videos</a>
                <a className="navigation-link" href="#photography">Photography</a>
                <a className="navigation-link" href="#contact">Contact</a>     
            </div>
        </div>
    );
}

export default Navbar;