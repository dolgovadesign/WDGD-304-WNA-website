import './about.css';
import myphoto from '../../components/images/myphoto.jpg';

// Create About component
export default function About() {
    return (
        <div id="about" className="section">
            <h3 className="section-name">About</h3>
            <div className="about-content">
                <div className="left-section">
                    {/* Add photo */}
                    <img className="my-photo" src={myphoto} alt="Elizaveta Dolgova" />
                </div>
                    {/* Add description */}
                <div className="right-section">
                    <p>Hi! I'm Elizaveta Dolgova. I am a student at Humber college in Web Design and Interactive Media program.</p>
                    <p>I'm passionate about designing my projects and making physical prototypes , and I've been learning how to code for three years.</p>
                    <p>I love collaborating with creative souls from all around the world, and I am here in Canada to share my skills and give value to our society.</p>
                    <p>Also, I am a drone pilot and I love video editing. My hobby gives meaning to my life, and I simply can't live without generating new ideas.</p>
                    <p>I'd like to share with you some of my projects that I've created at Humber College.</p>
                </div>
            </div>
        </div>
    );
}
