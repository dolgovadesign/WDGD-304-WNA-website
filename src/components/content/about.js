import './about.css';
import myphoto from '../../components/images/myphoto.jpg';

export default function About() {
    return (
        <div id="about" className="section">
            <h3 className="section-name">About</h3>
            <div className="about-content">
                <div className="left-section">
                    <img className="my-photo" src={myphoto} alt="Elizaveta Dolgova" />
                </div>
                <div className="right-section">
                    <p className="about-me">Hi! I'm Elizaveta Dolgova. I am a student at Humber college in Web Design and Interactive Media program.</p>
                    <p className="about-me">I'm passionate about designing my projects and making physical prototypes , and I've been learning how to code for three years.</p>
                    <p className="about-me">I love collaborating with creative souls from all around the world, and I am here in Canada to share my skills and give value to our society.</p>
                    <p className="about-me">Also, I am a drone pilot and I love video editing. My hobby gives meaning to my life, and I simply can't live without generating new ideas.</p>
                    <p className="about-me">I'd like to share with you some of my projects that I've created at Humber College.</p>
                </div>
            </div>
        </div>
    );
}
