import './portfolio.css';
import project1 from '../../components/images/project1.jpg';
import project2 from '../../components/images/project2.jpg';
import project3 from '../../components/images/project3.jpg';
import project4 from '../../components/images/project4.jpg';
import project5 from '../../components/images/project5.jpg';
import project6 from '../../components/images/project6.jpg';

function Portfolio() {
    const projects = [
        { image: project1, altText: 'Web Site', link: 'https://elizavetadolgova.ca/web-technology-3/exercise-3/index.html' },
        { image: project2, altText: 'Russian With Liza', link: 'https://elizavetadolgova.ca/learn/somerussian.html' },
        { image: project3, altText: 'Tip Calculator', link: 'https://elizavetadolgova.ca/tip-calculator/tip-calculator.html' },
        { image: project4, altText: 'Dog Restaurant', link: 'https://elizavetadolgova.ca/webd/5-dog-restaurant/index.html' },
        { image: project5, altText: 'Miracle Canvas', link: 'https://elizavetadolgova.ca/webd/7-miracles/canvas.html' },
        { image: project6, altText: 'Planet Animation', link: 'https://elizavetadolgova.ca/webd/9-orbiting-planet/animation.html' }
    ];

    return (
        <div id="portfolio" className="section">
            <h3 className="section-name">Portfolio</h3>
            <div className="portfolio-content">
                <div className="projects">
                    {
                        projects.map(project => (
                            <a className="project-thumbnail-link" href={project.link}>
                                <img className="project-thumbnail" src={project.image} alt={project.altText}></img>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;