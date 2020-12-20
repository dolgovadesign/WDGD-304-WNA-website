import './portfolio.css';
import project1 from '../../components/images/project1.jpg';
import project2 from '../../components/images/project2.jpg';
import project3 from '../../components/images/project3.jpg';
import project4 from '../../components/images/project4.jpg';
import project5 from '../../components/images/project5.jpg';
import project6 from '../../components/images/project6.jpg';

function Portfolio() {
    return (
        <div>
            <div id="portfolio">
                <h3 className="section-name">Portfolio</h3>
            </div>
            <div >
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/web-technology-3/exercise-3/index.html"><img className="project1" src={project1} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/learn/somerussian.html"><img className="project2" src={project2} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/tip-calculator/tip-calculator.html"><img className="project3" src={project3} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/webd/5-dog-restaurant/index.html"><img className="project4" src={project4} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/webd/7-miracles/canvas.html"><img className="project5" src={project5} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            <a className="thumbnail-link" href="https://elizavetadolgova.ca/webd/9-orbiting-planet/animation.html"><img className="project6" src={project6} alt="Elizaveta Dolgova" width="750" height="500" /></a>
            </div>
        </div>
    );
}

export default Portfolio;