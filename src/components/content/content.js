import './content.css';

import About from './about';
import Portfolio from './portfolio';
import Videos from './videos';
import Photography from './photography';
import Contact from './contact';

function Content() {
    return (
        <div className="content-container">
            <About />
            <Portfolio />
            <Videos />
            <Photography />
            <Contact />   
        </div>   
    );
}

export default Content;